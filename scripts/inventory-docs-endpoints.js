/**
 * Scans English docs (*.mdx, *.md) for `### Endpoint` + first fenced URL,
 * dedupes by normalized API path, and writes inventory reports.
 *
 * Usage: node scripts/inventory-docs-endpoints.js
 * Outputs:
 *   - internal/docs-i18n-inventory.md
 *   - internal/docs-i18n-inventory.json
 */

const fs = require("fs");
const path = require("path");

const DOCS_ROOT = path.join(__dirname, "..", "docs");
const OUT_DIR = path.join(__dirname, "..", "internal");

const SUPPORTED_EXT = new Set([".mdx", ".md"]);

const normalizeUrl = (raw) => {
	if (!raw) return "";
	return raw
		.trim()
		.replace(/`/g, "")
		.replace(/^(get|post|put|patch|delete|head|options)\s+/i, "")
		.replace(/^https?:\/\/[^/]+\//, "")
		.replace(/^\/+/, "")
		.replace(/\/+$/, "")
		.toLowerCase();
};

const walk = (root) => {
	const out = [];
	if (!fs.existsSync(root)) return out;
	const stack = [root];
	while (stack.length) {
		const current = stack.pop();
		for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
			const full = path.join(current, entry.name);
			if (entry.isDirectory()) {
				stack.push(full);
				continue;
			}
			const ext = path.extname(entry.name).toLowerCase();
			if (SUPPORTED_EXT.has(ext)) out.push(full);
		}
	}
	return out;
};

const stripFrontmatter = (text) => {
	if (!text.startsWith("---")) return text;
	const end = text.indexOf("\n---", 3);
	if (end === -1) return text;
	return text.slice(end + 4).replace(/^\s*\n/, "");
};

const extractEndpointUrl = (text) => {
	const noFm = stripFrontmatter(text);
	const endpointMatch = /###\s+Endpoint\s*\n+```[a-z]*\s*\n([\s\S]*?)```/i.exec(noFm);
	if (!endpointMatch) return null;
	return normalizeUrl(endpointMatch[1].trim().split("\n")[0]);
};

const priorityFor = (relPath) => {
	if (relPath.includes("vehicle-validation/colombia")) return "P0";
	if (relPath.startsWith("vehicle-validation/")) return "P1";
	return "P2";
};

const main = () => {
	const files = walk(DOCS_ROOT);
	const byUrl = new Map();
	const noEndpoint = [];

	for (const abs of files) {
		const rel = path.relative(DOCS_ROOT, abs).replace(/\\/g, "/");
		const raw = fs.readFileSync(abs, "utf8");
		const url = extractEndpointUrl(raw);
		if (!url) {
			noEndpoint.push(rel);
			continue;
		}
		if (!byUrl.has(url)) byUrl.set(url, []);
		byUrl.get(url).push(rel);
	}

	const canonical = [];
	const duplicates = [];

	for (const [url, paths] of [...byUrl.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
		paths.sort();
		const primary = paths[0];
		canonical.push({
			endpointUrl: url,
			primaryPath: primary,
			duplicatePaths: paths.slice(1),
			priority: priorityFor(primary),
		});
		if (paths.length > 1) {
			duplicates.push({ url, paths });
		}
	}

	const byFolder = {};
	for (const row of canonical) {
		const dir = path.dirname(row.primaryPath) || ".";
		if (!byFolder[dir]) byFolder[dir] = [];
		byFolder[dir].push(row);
	}

	if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

	const jsonPath = path.join(OUT_DIR, "docs-i18n-inventory.json");
	fs.writeFileSync(
		jsonPath,
		JSON.stringify(
			{
				generatedAt: new Date().toISOString(),
				docsRoot: "docs/",
				totalFilesScanned: files.length,
				filesWithEndpoint: canonical.length,
				uniqueEndpointUrls: byUrl.size,
				duplicateUrlGroups: duplicates.length,
				noEndpointCount: noEndpoint.length,
				canonical,
				duplicateGroups: duplicates,
				filesWithoutEndpoint: noEndpoint.sort(),
				byFolder,
			},
			null,
			2,
		),
		"utf8",
	);

	let md = `# Docs i18n — canonical endpoint inventory\n\n`;
	md += `Generated: ${new Date().toISOString()}\n\n`;
	md += `- **Files scanned:** ${files.length}\n`;
	md += `- **Unique endpoint URLs:** ${byUrl.size}\n`;
	md += `- **Duplicate URL groups (SEO / aliases):** ${duplicates.length}\n`;
	md += `- **Docs without \`### Endpoint\` block:** ${noEndpoint.length}\n\n`;

	md += `## Summary by priority (canonical primary path only)\n\n`;
	const p0 = canonical.filter((c) => c.priority === "P0").length;
	const p1 = canonical.filter((c) => c.priority === "P1").length;
	const p2 = canonical.filter((c) => c.priority === "P2").length;
	md += `| Priority | Count | Scope |\n| --- | ---: | --- |\n`;
	md += `| P0 | ${p0} | vehicle-validation/colombia |\n`;
	md += `| P1 | ${p1} | vehicle-validation (other countries) |\n`;
	md += `| P2 | ${p2} | identity, biometrics, resources, etc. |\n\n`;

	md += `## Duplicate URLs (keep one canonical; others are usually SEO)\n\n`;
	for (const { url, paths } of duplicates) {
		md += `- \`${url}\`\n`;
		for (const p of paths) md += `  - \`${p}\`\n`;
	}
	md += `\n`;

	md += `## Canonical list (primary path per URL)\n\n`;
	md += `| Priority | Endpoint (normalized) | Primary MD path |\n| --- | --- | --- |\n`;
	for (const row of canonical) {
		md += `| ${row.priority} | \`${row.endpointUrl}\` | \`${row.primaryPath}\` |\n`;
	}

	md += `\n## Files without extractable Endpoint\n\n`;
	md += `These files have no \`### Endpoint\` + fenced URL block (guides, intros, duplicates handled elsewhere, etc.):\n\n`;
	for (const p of noEndpoint.sort()) {
		md += `- \`${p}\`\n`;
	}

	fs.writeFileSync(path.join(OUT_DIR, "docs-i18n-inventory.md"), md, "utf8");
	console.log(`Wrote ${jsonPath}`);
	console.log(`Wrote ${path.join(OUT_DIR, "docs-i18n-inventory.md")}`);
};

main();
