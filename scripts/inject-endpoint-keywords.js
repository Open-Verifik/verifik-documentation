/**
 * Injects endpoint URL aliases into front-matter `keywords` of every doc that
 * has an `### Endpoint` block (as recorded in internal/docs-i18n-inventory.json).
 *
 * Why: Lunr's default tokenizer doesn't split on slashes, so `v2/co/cedula`
 * is one token. The local search plugin indexes front-matter `keywords` as a
 * separate, title-boosted document type, so adding tokenizable variants there
 * makes URL fragments findable.
 *
 * Usage:
 *   node scripts/inject-endpoint-keywords.js          # write changes
 *   node scripts/inject-endpoint-keywords.js --check  # exit 1 if any doc would change
 */

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const { aliasesForMany, dedupe } = require("./lib/endpoint-aliases");

const ROOT = path.join(__dirname, "..");
const DOCS_ROOT = path.join(ROOT, "docs");
const INVENTORY_PATH = path.join(ROOT, "internal", "docs-i18n-inventory.json");

const isCheckMode = process.argv.includes("--check");

const collectEndpointsByFile = (inventory) => {
	const map = new Map();
	for (const row of inventory.canonical || []) {
		const allPaths = [row.primaryPath, ...(row.duplicatePaths || [])];
		for (const rel of allPaths) {
			if (!map.has(rel)) map.set(rel, new Set());
			map.get(rel).add(row.endpointUrl);
		}
	}
	return map;
};

const toArrayKeywords = (existing) => {
	if (!existing) return [];
	if (Array.isArray(existing)) return existing.map((v) => String(v));
	if (typeof existing === "string") {
		return existing
			.split(",")
			.map((s) => s.trim())
			.filter(Boolean);
	}
	return [];
};

const processFile = (relPath, endpointSet) => {
	const absPath = path.join(DOCS_ROOT, relPath);
	if (!fs.existsSync(absPath)) {
		return { relPath, status: "missing" };
	}

	const raw = fs.readFileSync(absPath, "utf8");
	const parsed = matter(raw);

	const aliases = aliasesForMany([...endpointSet]);
	const existingKeywords = toArrayKeywords(parsed.data.keywords);
	const merged = dedupe([...existingKeywords, ...aliases]);

	const sameLength = merged.length === existingKeywords.length;
	const sameOrder = sameLength && merged.every((k, i) => k === existingKeywords[i]);
	if (sameOrder) {
		return { relPath, status: "unchanged" };
	}

	parsed.data.keywords = merged;

	const output = matter.stringify(parsed.content, parsed.data, { lineWidth: -1 });

	if (isCheckMode) {
		return { relPath, status: "would-change", added: merged.length - existingKeywords.length };
	}

	fs.writeFileSync(absPath, output, "utf8");
	return { relPath, status: "updated", added: merged.length - existingKeywords.length };
};

const main = () => {
	if (!fs.existsSync(INVENTORY_PATH)) {
		console.error(`Inventory not found at ${INVENTORY_PATH}. Run 'npm run inventory-docs-i18n' first.`);
		process.exit(1);
	}

	const inventory = JSON.parse(fs.readFileSync(INVENTORY_PATH, "utf8"));
	const fileMap = collectEndpointsByFile(inventory);

	const results = { updated: 0, unchanged: 0, missing: 0, wouldChange: 0 };
	const missingFiles = [];

	for (const [relPath, endpointSet] of fileMap.entries()) {
		const result = processFile(relPath, endpointSet);
		switch (result.status) {
			case "updated":
				results.updated += 1;
				break;
			case "would-change":
				results.wouldChange += 1;
				break;
			case "missing":
				results.missing += 1;
				missingFiles.push(relPath);
				break;
			default:
				results.unchanged += 1;
		}
	}

	console.log(`Scanned ${fileMap.size} doc files referenced in inventory.`);
	if (isCheckMode) {
		console.log(`Would update: ${results.wouldChange}`);
	} else {
		console.log(`Updated:     ${results.updated}`);
	}
	console.log(`Unchanged:   ${results.unchanged}`);
	if (results.missing > 0) {
		console.log(`Missing:     ${results.missing}`);
		for (const rel of missingFiles) console.log(`  - ${rel}`);
	}

	if (isCheckMode && results.wouldChange > 0) {
		process.exit(1);
	}
};

main();
