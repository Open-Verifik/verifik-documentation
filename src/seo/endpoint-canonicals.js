/**
 * Canonical URLs and client redirects for the Nov 2026 SEO pass.
 *
 * One preferred URL per endpoint per language. Other copies stay in the repo.
 * Identical copies are client redirects. Different write-ups of the same
 * endpoint keep their page and point rel=canonical at the preferred URL.
 * The sitemap drops the non-canonical URLs.
 *
 * Spanish is not on Docusaurus i18n (follow-up). Locale HTML is rewritten in
 * src/plugins/hreflang-inject.js from the URL prefix.
 */

const fs = require("fs");

const SITE = "https://docs.verifik.co";

/** @param {string} pathname site path, with or without trailing slash */
const withSlash = (pathname) => {
	if (!pathname || pathname === "/") return "/";
	return pathname.endsWith("/") ? pathname : `${pathname}/`;
};

const abs = (pathname) => `${SITE}${withSlash(pathname)}`;

/**
 * Preferred URL for each endpoint that has more than one route.
 * Keys are the non-canonical pathnames (trailing slash).
 *
 * Colombia citizen (GET/POST /v2/co/cedula) — sidebar doc identity/colombia.
 * Colombia full ID (GET /v2/co/cedula/extra) — sidebar doc identity/colombia-full-id.
 *
 * Registraduría certificate and Policía Nacional have a single public URL per
 * language (listed in ALREADY_CANONICAL). The misspelled Policía slug is a
 * client redirect, not a second canonical.
 *
 * @type {Record<string, string>}
 */
const CANONICAL_BY_PATH = {
	// EN — Colombian citizen. /identity/colombia/ is the sidebar page.
	"/identity-validation/colombia/colombian-citizen/": abs("/identity/colombia"),
	// ES — same endpoint. /verifik-es/identity-validation/colombia/ is an identical
	// copy and is a client redirect, so it is not listed here.
	"/verifik-es/validacion-identidad/colombia/ciudadano-colombiano/": abs("/verifik-es/identidad/colombia"),
	// ZH — same title on both routes. identity/colombia is the preferred page.
	"/verifik-zh/identity-validation/colombia/colombian-citizen/": abs("/verifik-zh/identity/colombia"),
	// EN — Colombia full ID.
	"/identity-validation/colombia/colombian-citizen-with-extra-data/": abs("/identity/colombia-full-id"),
	// ES — Colombia full ID. Slug on the preferred page is /identidad/colombia-full-id.
	"/verifik-es/validacion-identidad/colombia/ciudadano-colombiano-con-datos-extra/": abs(
		"/verifik-es/identidad/colombia-full-id",
	),
};

/**
 * Endpoints in this pass that already have one URL per language.
 * Documented so the mapping is complete. Not excluded from the sitemap.
 */
const ALREADY_CANONICAL = [
	abs("/identity/colombia"),
	abs("/verifik-es/identidad/colombia"),
	abs("/verifik-zh/identity/colombia"),
	// Korean tree has only the identity-validation route for this endpoint.
	abs("/verifik-ko/identity-validation/colombia/colombian-citizen"),
	abs("/identity/colombia-full-id"),
	abs("/verifik-es/identidad/colombia-full-id"),
	abs("/identity/colombia-registraduria-certificate"),
	abs("/verifik-es/identidad/colombia-registraduria-certificate"),
	abs("/verifik-fr/identity/colombia-registraduria-certificate"),
	abs("/verifik-pt/identity/colombia-registraduria-certificate"),
	abs("/verifik-ko/identity/colombia-registraduria-certificate"),
	abs("/verifik-ja/identity/colombia-registraduria-certificate"),
	abs("/verifik-zh/identity/colombia-registraduria-certificate"),
	abs("/background-check/colombia-police-record-check"),
	abs("/verifik-es/verificacion-antecedentes/verificacion-antecedentes-colombia-policia"),
	abs("/verifik-fr/background-check/colombia-police-record-check"),
	abs("/verifik-pt/background-check/colombia-police-record-check"),
	abs("/verifik-ko/background-check/colombia-police-record-check"),
	abs("/verifik-ja/background-check/colombia-police-record-check"),
	abs("/verifik-zh/background-check/colombia-police-record-check"),
];

/**
 * Paths that must not be real routes, so @docusaurus/plugin-client-redirects
 * can emit a static meta-refresh HTML file. nginx will serve that file
 * instead of the SPA shell. The docs homepage is a real page (src/pages/index.js),
 * not a redirect, so the navbar logo and in-app links to "/" keep working.
 */
const CLIENT_REDIRECTS = [
	{ from: "/docs-es/terminos-y-condiciones", to: "/verifik-es/terminos-y-condiciones" },
	{ from: "/docs-es/legal/politica-privacidad", to: "/verifik-es/legal/politica-privacidad" },
	{ from: "/docs-es/acuerdo-de-niveles-de-servicio", to: "/verifik-es/acuerdo-de-niveles-de-servicio" },
	{ from: "/identity/identity-verification", to: "/identity/ekyc-identity-verification-guide" },
	{
		from: "/verifik-es/identidad/verificacion-identidad",
		to: "/verifik-es/identidad/guia-verificacion-identidad-ekyc",
	},
	// Identical body to docs-es/identity/colombia.mdx (drafted so this path is free).
	{ from: "/verifik-es/identity-validation/colombia", to: "/verifik-es/identidad/colombia" },
	{
		from: "/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-policia",
		to: "/verifik-es/verificacion-antecedentes/verificacion-antecedentes-colombia-policia",
	},
];

const SITEMAP_IGNORE_PATTERNS = [
	"/api/**",
	"/blog/welcome",
	"/blog/welcome/**",
	"/blog/authors/yangshun",
	"/blog/authors/yangshun/**",
	"/blog/authors/all-sebastien-lorber-articles",
	"/blog/authors/all-sebastien-lorber-articles/**",
	"/blog/tags/docusaurus",
	"/blog/tags/docusaurus/**",
	"/blog/tags/facebook",
	"/blog/tags/facebook/**",
	"/blog/tags/hello",
	"/blog/tags/hello/**",
];

/**
 * @param {string} url absolute or path
 * @returns {string} pathname with trailing slash
 */
const pathnameOf = (url) => {
	try {
		const parsed = url.startsWith("http") ? new URL(url) : new URL(url, SITE);
		return withSlash(parsed.pathname);
	} catch {
		return withSlash(url);
	}
};

/**
 * @param {string} url
 */
const canonicalFor = (url) => CANONICAL_BY_PATH[pathnameOf(url)] || null;

/**
 * @param {string} url absolute permalink or pathname
 */
const isNonCanonicalPermalink = (url) => Boolean(canonicalFor(url));

/**
 * @param {string} url sitemap item URL
 */
/**
 * Docusaurus lastmod reads `git log` for the whole repo. This repo commits
 * the static build, so that log exceeds Node's maxBuffer and the build fails.
 * Use each route's source file mtime instead.
 *
 * @param {Array<{path?: string, metadata?: {sourceFilePath?: string}, routes?: any[]}>} routes
 * @returns {Map<string, string>} pathname with trailing slash -> YYYY-MM-DD
 */
const lastmodByRoutePath = (routes) => {
	const map = new Map();
	const stack = Array.isArray(routes) ? [...routes] : [];
	while (stack.length) {
		const route = stack.pop();
		if (!route || typeof route !== "object") continue;
		if (Array.isArray(route.routes)) stack.push(...route.routes);
		const src = route.metadata && route.metadata.sourceFilePath;
		if (!route.path || !src) continue;
		try {
			const day = fs.statSync(src).mtime.toISOString().slice(0, 10);
			map.set(pathnameOf(route.path), day);
		} catch {
			// Missing source files keep the fallback date applied by the caller.
		}
	}
	return map;
};

const shouldDropFromSitemap = (url) => {
	const path = pathnameOf(url);
	if (path.startsWith("/api/")) return true;
	if (path === "/blog/welcome/" || path.startsWith("/blog/welcome/")) return true;
	if (path.startsWith("/blog/authors/yangshun/")) return true;
	if (path.startsWith("/blog/authors/all-sebastien-lorber-articles/")) return true;
	if (path.startsWith("/blog/tags/docusaurus/")) return true;
	if (path.startsWith("/blog/tags/facebook/")) return true;
	if (path.startsWith("/blog/tags/hello/")) return true;
	return Boolean(CANONICAL_BY_PATH[path]);
};

module.exports = {
	SITE,
	CANONICAL_BY_PATH,
	ALREADY_CANONICAL,
	CLIENT_REDIRECTS,
	SITEMAP_IGNORE_PATTERNS,
	pathnameOf,
	canonicalFor,
	isNonCanonicalPermalink,
	shouldDropFromSitemap,
	lastmodByRoutePath,
};
