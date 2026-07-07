/**
 * Rebuild partial-locale sidebars (FR, PT, KO, JA, ZH) using English sidebar order.
 * Keeps localized labels from the existing partial sidebar; only reorders structure.
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

const normalizeItem = (item) => {
	if (typeof item === "string") {
		return { type: "doc", id: item, label: item };
	}
	return item;
};

const getDocId = (item) => {
	const node = normalizeItem(item);
	if (node.type === "doc") return node.id;
	return null;
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

const docExists = (localeFolder, docId) => {
	const base = path.join(ROOT, localeFolder, docId);
	return fs.existsSync(`${base}.mdx`) || fs.existsSync(`${base}.md`);
};

const filterTree = (items, byId, localeFolder) => {
	const out = [];
	for (const raw of items || []) {
		const item = normalizeItem(raw);
		if (item.type === "doc") {
			if (byId.has(item.id) || docExists(localeFolder, item.id)) {
				out.push(byId.get(item.id) || { type: "doc", id: item.id, label: item.label || item.id });
			}
			continue;
		}
		if (item.type === "category") {
			const childItems = filterTree(item.items, byId, localeFolder);
			if (!childItems.length) continue;
			const cloned = structuredClone(item);
			cloned.items = childItems;
			if (byId.has(item.id)) {
				const partialCat = byId.get(item.id);
				if (partialCat.label) cloned.label = partialCat.label;
			}
			out.push(cloned);
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

const findPartialCategoryByDocOverlap = (partialSidebar, enCategory) => {
	const enIds = collectDocIds(enCategory.items);
	let best = null;
	let bestScore = 0;
	for (const entry of partialSidebar.tutorialSidebar) {
		if (entry.type !== "category") continue;
		const partialIds = collectDocIds(entry.items);
		const score = [...enIds].filter((id) => partialIds.has(id)).length;
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

const buildSidebarForLocale = async (locale, config, enSidebar, partialSidebar) => {
	const byId = indexPartialNodes(partialSidebar.tutorialSidebar);
	const localeFolder = config.folder;
	const output = [];

	const introNode = partialSidebar.tutorialSidebar.find((e) => e.type === "doc" && e.id === "intro");
	output.push(introNode || { type: "doc", id: "intro", label: config.intro });

	for (const enLabel of EN_CATEGORY_LABELS) {
		const enCategory = findEnCategory(enSidebar, enLabel);
		if (!enCategory) continue;

		const partialMatch =
			findPartialCategoryByDocOverlap(partialSidebar, enCategory) ||
			findPartialCategoryByLabels(partialSidebar, [enLabel]);

		const filteredItems = filterTree(enCategory.items, byId, localeFolder);
		if (!filteredItems.length) continue;

		output.push({
			type: "category",
			label: partialMatch?.label || enCategory.label,
			collapsible: enCategory.collapsible ?? false,
			...(enCategory.link && docExists(localeFolder, enCategory.link.id) ? { link: enCategory.link } : {}),
			items: filteredItems,
		});
	}

	const certificatesCategory = partialSidebar.tutorialSidebar.find(
		(entry) => entry.type === "category" && PARTIAL_ONLY_AFTER_BACKGROUND.includes(entry.label)
	);
	if (certificatesCategory) {
		const filteredCerts = filterTree(certificatesCategory.items, byId, localeFolder);
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
		const filteredLegal = filterTree(verifikCategory.items, byId, localeFolder);
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
	const targets = localeOpt ? [localeOpt] : Object.keys(LOCALES);

	for (const locale of targets) {
		const config = LOCALES[locale];
		if (!config) {
			console.error(`Unknown locale: ${locale}`);
			process.exit(1);
		}

		const partialSidebar = (await import(pathToFileURL(path.join(ROOT, config.sidebar)).href)).default;
		const rebuilt = await buildSidebarForLocale(locale, config, enSidebar, partialSidebar);

		const firstCategory = rebuilt.find((e) => e.type === "category");
		console.log(
			`[${locale}] categories=${rebuilt.filter((e) => e.type === "category").length} first=${firstCategory?.label}`
		);

		if (!dryRun) {
			writeSidebarFile(locale, rebuilt);
		}
	}
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
