/**
 * Build static/hreflang-manifest.json for multilingual SEO (hreflang alternates).
 * Groups equivalent docs by canonical logical path (English-style path under docs/).
 *
 * Usage: node scripts/generate-hreflang-manifest.js
 * Run before production build (see package.json "prebuild").
 */

const fs = require("fs");
const path = require("path");

const SITE_URL = "https://docs.verifik.co";
const TRAILING_SLASH = true;

/** Doc plugins that participate in hreflang (main localized trees). */
const DOC_PLUGINS = [
	{ root: "docs", routeBasePath: "", hreflang: "en" },
	{ root: "docs-es", routeBasePath: "verifik-es", hreflang: "es" },
	{ root: "docs-fr", routeBasePath: "verifik-fr", hreflang: "fr" },
	{ root: "docs-pt", routeBasePath: "verifik-pt", hreflang: "pt" },
	{ root: "docs-ko", routeBasePath: "verifik-ko", hreflang: "ko" },
	{ root: "docs-ja", routeBasePath: "verifik-ja", hreflang: "ja" },
	{ root: "docs-zh", routeBasePath: "verifik-zh", hreflang: "zh" },
];

const SUPPORTED_EXT = new Set([".mdx", ".md"]);

/**
 * When docs-es uses different folder/file names than docs/, map docs-es relative path (no ext)
 * to the canonical logical key (same as docs/ relative path without ext).
 */
const ES_REL_PATH_TO_CANONICAL = {
	"validacion-vehiculos/spain": "vehicle-validation/spain",
	"validacion-empresarial/spain": "business-validation/spain",
	"verificacion-antecendentes/verificacion-antecendentes-brasil": "background-check/brazil",
	"verificacion-antecendentes/verificacion-antecendentes-colombia-inpec": "background-check/colombia-inpec",
	"verificacion-antecendentes/verificacion-antecendentes-colombia-procuraduria":
		"background-check/colombia-disciplinary-records-attorneys-office",
	"verificacion-antecendentes/verificacion-antecendentes-colombia-policia": "background-check/colombia-police-record-check",
	"verificacion-antecendentes/verificacion-antecendentes-colombia-cumplimiento-policial":
		"background-check/colombia-police-compliance-corrective-measures",
	"verificacion-antecendentes/verificacion-antecendentes-colombia-contratos-publicos":
		"background-check/colombia-public-contracts",
	"verificacion-antecendentes/verificacion-antecendentes-colombia-contraloria": "background-check/colombia-comptroller-certificate",
	"verificacion-antecendentes/verificacion-antecendentes-dea": "background-check/dea-background-check",
	"verificacion-antecendentes/verificacion-antecendentes-europol": "background-check/europol-background-check",
	"verificacion-antecendentes/verificacion-antecendentes-fbi": "background-check/fbi-background-check",
	"verificacion-antecendentes/verificacion-antecendentes-interpol": "background-check/interpol-background-check",
	"verificacion-antecendentes/verificacion-antecendentes-ofac": "background-check/ofac-background-check",
};

/**
 * @param {string} rootFolder
 * @param {string} relPathNoExt
 */
const canonicalLogicalKey = (rootFolder, relPathNoExt) => {
	if (rootFolder === "docs-es") {
		return ES_REL_PATH_TO_CANONICAL[relPathNoExt] || relPathNoExt;
	}
	return relPathNoExt;
};

const walkDocs = (rootAbs) => {
	const out = [];
	if (!fs.existsSync(rootAbs)) return out;
	const stack = [rootAbs];
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
	if (!text.startsWith("---")) return "";
	const end = text.indexOf("\n---", 3);
	if (end === -1) return "";
	return text.slice(3, end);
};

const extractSlug = (frontmatter) => {
	const m = /^slug:\s*(\/.*)\s*$/m.exec(frontmatter);
	return m ? m[1].trim() : null;
};

const defaultSlugFromRelPath = (relPath) => `/${relPath.replace(/\\/g, "/")}`;

const joinUrlPath = (routeBasePath, slug) => {
	const rb = routeBasePath ? `/${routeBasePath.replace(/^\/|\/$/g, "")}` : "";
	const sl = slug.startsWith("/") ? slug : `/${slug}`;
	const combined = `${rb}${sl}`;
	const parts = combined.split("/").filter(Boolean);
	const joined = `/${parts.join("/")}`;
	return TRAILING_SLASH ? (joined.endsWith("/") ? joined : `${joined}/`) : joined.replace(/\/$/, "") || "/";
};

const toAbsolutePermalink = (pathname) => {
	const base = SITE_URL.endsWith("/") ? SITE_URL.slice(0, -1) : SITE_URL;
	const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
	return `${base}${p}`;
};

const main = () => {
	const repoRoot = path.resolve(__dirname, "..");
	/** @type {Record<string, Record<string, string>>} */
	const clusters = {};

	for (const plugin of DOC_PLUGINS) {
		const rootAbs = path.join(repoRoot, plugin.root);
		const files = walkDocs(rootAbs);
		for (const abs of files) {
			const rel = path.relative(rootAbs, abs).replace(/\\/g, "/");
			const relNoExt = rel.replace(/\.(mdx|md)$/i, "");
			const raw = fs.readFileSync(abs, "utf8");
			const fm = stripFrontmatter(raw);
			let slug = extractSlug(fm);
			if (!slug) slug = defaultSlugFromRelPath(relNoExt);
			const pathname = joinUrlPath(plugin.routeBasePath, slug);
			const permalink = toAbsolutePermalink(pathname);
			const logicalKey = canonicalLogicalKey(plugin.root, relNoExt);

			if (!clusters[logicalKey]) clusters[logicalKey] = {};
			clusters[logicalKey][plugin.hreflang] = permalink;
		}
	}

	const filtered = {};
	for (const [key, locales] of Object.entries(clusters)) {
		if (Object.keys(locales).length >= 2) filtered[key] = locales;
	}

	/** @type {Record<string, string>} */
	const permalinkToKey = {};
	for (const [key, locales] of Object.entries(filtered)) {
		for (const url of Object.values(locales)) {
			permalinkToKey[url] = key;
		}
	}

	const outDir = path.join(repoRoot, "static");
	if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
	const outPath = path.join(outDir, "hreflang-manifest.json");
	const payload = {
		generatedAt: new Date().toISOString(),
		siteUrl: SITE_URL,
		clusters: filtered,
		permalinkToKey,
	};

	fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
	console.log(
		`Wrote ${outPath} (${Object.keys(filtered).length} clusters, ${Object.keys(permalinkToKey).length} permalinks)`,
	);
};

main();
