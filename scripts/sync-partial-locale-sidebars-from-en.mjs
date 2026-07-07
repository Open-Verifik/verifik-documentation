/**
 * Rebuild partial-locale sidebars (FR, PT, KO, JA, ZH) using English sidebar order.
 * Keeps localized labels from the existing partial sidebar; only reorders structure.
 * Resolves doc ids via slug (partial locales often use different frontmatter ids than EN).
 *
 * Usage: node scripts/sync-partial-locale-sidebars-from-en.mjs [--locale=pt] [--dry-run]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const localeOpt = args.find((a) => a.startsWith("--locale="))?.split("=")[1];

const LOCALES = {
	fr: { folder: "docs-fr", sidebar: "sidebars-fr.js", intro: "Accueil" },
	pt: { folder: "docs-pt", sidebar: "sidebars-pt.js", intro: "Início" },
	ko: { folder: "docs-ko", sidebar: "sidebars-ko.js", intro: "홈" },
	ja: { folder: "docs-ja", sidebar: "sidebars-ja.js", intro: "ホーム" },
	zh: { folder: "docs-zh", sidebar: "sidebars-zh.js", intro: "首页" },
};

/** EN categories partial locales mirror (in this order).
 * Driver before Vehicle matches sidebars-es.js (Spanish full tree). */
const EN_CATEGORY_LABELS = [
	"IDENTITY VERIFICATION",
	"BUSINESS VERIFICATION",
	"DRIVER VALIDATION",
	"VEHICLE VERIFICATION",
	"BACKGROUND CHECK",
];

/** Partial-only categories appended after BACKGROUND CHECK (before VERIFIK LLC). */
const PARTIAL_ONLY_AFTER_BACKGROUND = ["Certificados", "Certificates", "Certificats", "証明書", "证书", "증명서"];

const VERIFIK_LLC_LABEL = "VERIFIK LLC";

const DOC_EXTENSIONS = [".mdx", ".md"];

const normalizeItem = (item) => {
	if (typeof item === "string") {
		return { type: "doc", id: item, label: item };
	}
	return item;
};

const parseFrontmatter = (content) => {
	const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	if (!match) return {};

	const fields = {};
	for (const line of match[1].split("\n")) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith("#")) continue;
		const sep = trimmed.indexOf(":");
		if (sep === -1) continue;
		const key = trimmed.slice(0, sep).trim();
		let value = trimmed.slice(sep + 1).trim();
		if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
			value = value.slice(1, -1);
		}
		fields[key] = value;
	}
	return fields;
};

const normalizeSlug = (slug) => {
	if (!slug) return null;
	return slug.startsWith("/") ? slug : `/${slug}`;
};

/** @returns {{ docs: Map<string, { slug: string|null, title: string|null }>, slugToDocId: Map<string, string> }} */
const indexDocsInFolder = (folder) => {
	const docs = new Map();
	const slugToDocId = new Map();
	const baseDir = path.join(ROOT, folder);

	const walk = (dir, relDir = "") => {
		if (!fs.existsSync(dir)) return;

		for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
			const relPath = relDir ? `${relDir}/${entry.name}` : entry.name;

			if (entry.isDirectory()) {
				walk(path.join(dir, entry.name), relPath);
				continue;
			}

			const ext = DOC_EXTENSIONS.find((candidate) => entry.name.endsWith(candidate));
			if (!ext) continue;

			const content = fs.readFileSync(path.join(dir, entry.name), "utf8");
			const frontmatter = parseFrontmatter(content);
			const baseName = entry.name.slice(0, -ext.length);
			const docIdPart = frontmatter.id || baseName;
			const docId = relDir ? `${relDir}/${docIdPart}` : docIdPart;
			const slug = normalizeSlug(frontmatter.slug);

			docs.set(docId, { slug, title: frontmatter.title || null });
			if (slug) slugToDocId.set(slug, docId);
		}
	};

	walk(baseDir);
	return { docs, slugToDocId };
};

const collectDocIds = (items, out = new Set()) => {
	for (const raw of items || []) {
		const item = normalizeItem(raw);
		if (item.type === "doc" && item.id) out.add(item.id);
		if (item.type === "category") collectDocIds(item.items, out);
	}
	return out;
};

const indexPartialNodes = (items, byId = new Map()) => {
	for (const raw of items || []) {
		const item = normalizeItem(raw);
		if (item.type === "doc" && item.id) {
			byId.set(item.id, structuredClone(item));
		}
		if (item.type === "category") {
			indexPartialNodes(item.items, byId);
		}
	}
	return byId;
};

const resolveLocaleDocId = (enDocId, enDocs, localeDocs, localeSlugToDocId) => {
	if (localeDocs.has(enDocId)) return enDocId;

	const enMeta = enDocs.get(enDocId);
	if (enMeta?.slug && localeSlugToDocId.has(enMeta.slug)) {
		return localeSlugToDocId.get(enMeta.slug);
	}

	return null;
};

const pickLabel = (localeDocId, enDocId, enItem, byId, localeDocs) => {
	if (byId.has(localeDocId)) return byId.get(localeDocId).label;
	if (byId.has(enDocId)) return byId.get(enDocId).label;
	if (enItem.label) return enItem.label;
	return localeDocs.get(localeDocId)?.title || localeDocId;
};

const filterTree = (items, byId, enDocs, localeDocs, localeSlugToDocId) => {
	const out = [];

	for (const raw of items || []) {
		const item = normalizeItem(raw);

		if (item.type === "doc") {
			const localeDocId = resolveLocaleDocId(item.id, enDocs, localeDocs, localeSlugToDocId);
			if (!localeDocId) continue;

			out.push({
				type: "doc",
				id: localeDocId,
				label: pickLabel(localeDocId, item.id, item, byId, localeDocs),
				...(item.key ? { key: item.key } : {}),
			});
			continue;
		}

		if (item.type === "category") {
			const childItems = filterTree(item.items, byId, enDocs, localeDocs, localeSlugToDocId);
			if (!childItems.length) continue;

			out.push({
				...structuredClone(item),
				items: childItems,
			});
		}
	}

	return out;
};

const findEnCategory = (enSidebar, label) =>
	enSidebar.tutorialSidebar.find((entry) => entry.type === "category" && entry.label === label);

const findPartialCategoryByLabels = (partialSidebar, labels) =>
	partialSidebar.tutorialSidebar.find(
		(entry) => entry.type === "category" && labels.some((l) => entry.label === l || entry.label?.includes(l))
	);

const findPartialCategoryByDocOverlap = (partialSidebar, enCategory, enDocs, localeDocs, localeSlugToDocId) => {
	const enIds = collectDocIds(enCategory.items);
	let best = null;
	let bestScore = 0;

	for (const entry of partialSidebar.tutorialSidebar) {
		if (entry.type !== "category") continue;

		const partialIds = collectDocIds(entry.items);
		let score = 0;

		for (const enId of enIds) {
			const localeId = resolveLocaleDocId(enId, enDocs, localeDocs, localeSlugToDocId);
			if (localeId && partialIds.has(localeId)) score += 1;
			if (partialIds.has(enId)) score += 1;
		}

		if (score > bestScore) {
			bestScore = score;
			best = entry;
		}
	}

	return bestScore > 0 ? best : null;
};

const serializeItem = (item, indent) => {
	const pad = "\t".repeat(indent);
	if (typeof item === "string") {
		return `${pad}"${item}",`;
	}
	if (item.type === "doc") {
		const parts = [`${pad}{ type: "doc", id: "${item.id}"`];
		if (item.label) parts.push(`, label: ${JSON.stringify(item.label)}`);
		if (item.key) parts.push(`, key: ${JSON.stringify(item.key)}`);
		return `${parts.join("")} },`;
	}
	if (item.type === "category") {
		const lines = [`${pad}{`];
		lines.push(`${pad}\ttype: "category",`);
		lines.push(`${pad}\tlabel: ${JSON.stringify(item.label)},`);
		if (item.collapsible === true) lines.push(`${pad}\tcollapsible: true,`);
		if (item.collapsible === false) lines.push(`${pad}\tcollapsible: false,`);
		if (item.link) {
			lines.push(`${pad}\tlink: { type: "doc", id: ${JSON.stringify(item.link.id)} },`);
		}
		lines.push(`${pad}\titems: [`);
		for (const child of item.items) {
			lines.push(serializeItem(child, indent + 2));
		}
		lines.push(`${pad}\t],`);
		lines.push(`${pad}},`);
		return lines.join("\n");
	}
	return `${pad}// unsupported item`;
};

const writeSidebarFile = (locale, sidebarItems) => {
	const { sidebar } = LOCALES[locale];
	const lines = [
		"// @ts-check",
		`/** ${locale.toUpperCase()} docs (partial tree); order synced from sidebars.js (English).`,
		" * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}",
		" */",
		"const sidebars = {",
		"\ttutorialSidebar: [",
	];
	for (const item of sidebarItems) {
		lines.push(serializeItem(item, 2));
	}
	lines.push("\t],", "};", "", "export default sidebars;", "");
	return fs.writeFileSync(path.join(ROOT, sidebar), lines.join("\n"), "utf8");
};

const validateSidebarDocIds = (items, localeDocs, missing = []) => {
	for (const raw of items || []) {
		const item = normalizeItem(raw);
		if (item.type === "doc" && !localeDocs.has(item.id)) {
			missing.push(item.id);
		}
		if (item.type === "category") {
			validateSidebarDocIds(item.items, localeDocs, missing);
			if (item.link?.id && !localeDocs.has(item.link.id)) {
				missing.push(item.link.id);
			}
		}
	}
	return missing;
};

const buildSidebarForLocale = async (locale, config, enSidebar, partialSidebar, enDocs, localeIndex) => {
	const byId = indexPartialNodes(partialSidebar.tutorialSidebar);
	const { docs: localeDocs, slugToDocId: localeSlugToDocId } = localeIndex;
	const output = [];

	const introNode = partialSidebar.tutorialSidebar.find((e) => e.type === "doc" && e.id === "intro");
	output.push(introNode || { type: "doc", id: "intro", label: config.intro });

	for (const enLabel of EN_CATEGORY_LABELS) {
		const enCategory = findEnCategory(enSidebar, enLabel);
		if (!enCategory) continue;

		const partialMatch =
			findPartialCategoryByDocOverlap(partialSidebar, enCategory, enDocs, localeDocs, localeSlugToDocId) ||
			findPartialCategoryByLabels(partialSidebar, [enLabel]);

		const filteredItems = filterTree(enCategory.items, byId, enDocs, localeDocs, localeSlugToDocId);
		if (!filteredItems.length) continue;

		const categoryLink =
			enCategory.link &&
			resolveLocaleDocId(enCategory.link.id, enDocs, localeDocs, localeSlugToDocId);

		output.push({
			type: "category",
			label: partialMatch?.label || enCategory.label,
			collapsible: enCategory.collapsible ?? false,
			...(categoryLink ? { link: { type: "doc", id: categoryLink } } : {}),
			items: filteredItems,
		});
	}

	const certificatesCategory = partialSidebar.tutorialSidebar.find(
		(entry) => entry.type === "category" && PARTIAL_ONLY_AFTER_BACKGROUND.includes(entry.label)
	);
	if (certificatesCategory) {
		const filteredCerts = filterTree(
			certificatesCategory.items,
			byId,
			enDocs,
			localeDocs,
			localeSlugToDocId
		);
		if (filteredCerts.length) {
			output.push({
				type: "category",
				label: certificatesCategory.label,
				collapsible: certificatesCategory.collapsible ?? false,
				items: filteredCerts,
			});
		}
	}

	const verifikCategory = findEnCategory(enSidebar, VERIFIK_LLC_LABEL);
	const partialVerifik = partialSidebar.tutorialSidebar.find(
		(entry) => entry.type === "category" && entry.label === VERIFIK_LLC_LABEL
	);
	if (verifikCategory && partialVerifik) {
		const filteredLegal = filterTree(verifikCategory.items, byId, enDocs, localeDocs, localeSlugToDocId);
		if (filteredLegal.length) {
			output.push({
				type: "category",
				label: VERIFIK_LLC_LABEL,
				collapsible: false,
				items: filteredLegal,
			});
		}
	}

	return output;
};

const main = async () => {
	const enSidebar = (await import(pathToFileURL(path.join(ROOT, "sidebars.js")).href)).default;
	const { docs: enDocs } = indexDocsInFolder("docs");
	const targets = localeOpt ? [localeOpt] : Object.keys(LOCALES);
	let hasErrors = false;

	for (const locale of targets) {
		const config = LOCALES[locale];
		if (!config) {
			console.error(`Unknown locale: ${locale}`);
			process.exit(1);
		}

		const localeIndex = indexDocsInFolder(config.folder);
		const partialSidebar = (await import(pathToFileURL(path.join(ROOT, config.sidebar)).href)).default;
		const rebuilt = await buildSidebarForLocale(
			locale,
			config,
			enSidebar,
			partialSidebar,
			enDocs,
			localeIndex
		);

		const missing = validateSidebarDocIds(rebuilt, localeIndex.docs);
		const firstCategory = rebuilt.find((e) => e.type === "category");
		console.log(
			`[${locale}] categories=${rebuilt.filter((e) => e.type === "category").length} first=${firstCategory?.label} docs=${localeIndex.docs.size} missing=${missing.length}`
		);

		if (missing.length) {
			hasErrors = true;
			console.error(`[${locale}] invalid sidebar doc ids:\n  - ${missing.join("\n  - ")}`);
		}

		if (!dryRun && !missing.length) {
			writeSidebarFile(locale, rebuilt);
		}
	}

	if (hasErrors) {
		process.exit(1);
	}
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
