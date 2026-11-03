/**
 * Post-build HTML fixes for locale SEO.
 *
 * Spanish and the partial locales are separate docs plugins, not Docusaurus
 * i18n, so every page is emitted as lang=en with a self hreflang of en.
 * This pass rewrites html lang, og:locale, and hreflang from the URL prefix,
 * and points duplicate endpoint pages at the canonical URL in
 * src/seo/endpoint-canonicals.js.
 *
 * hreflang alternates come from static/hreflang-manifest.json (clusters of
 * equivalent pages). The manifest stays out of the client bundle.
 */

const { canonicalFor, pathnameOf, SITE } = require("../seo/endpoint-canonicals");

const HREFLANG_BY_KEY = {
	en: "en",
	es: "es",
	fr: "fr",
	pt: "pt",
	ko: "ko",
	ja: "ja",
	zh: "zh-Hans",
};

const HTML_LANG = {
	en: "en",
	es: "es",
	fr: "fr",
	pt: "pt",
	ko: "ko",
	ja: "ja",
	zh: "zh-Hans",
};

const OG_LOCALE = {
	en: "en_US",
	es: "es_ES",
	fr: "fr_FR",
	pt: "pt_BR",
	ko: "ko_KR",
	ja: "ja_JP",
	zh: "zh_CN",
};

/** Longest prefix wins. Legacy Spanish trees are included. */
const LOCALE_PREFIXES = [
	["/verifik-es/", "es"],
	["/docs-es/", "es"],
	["/doc-es/", "es"],
	["/recursos/", "es"],
	["/verifik-fr/", "fr"],
	["/verifik-pt/", "pt"],
	["/verifik-ko/", "ko"],
	["/verifik-ja/", "ja"],
	["/verifik-zh/", "zh"],
];

/**
 * @param {Record<string, string>} cluster
 */
const buildHreflangTags = (cluster) => {
	const tags = [];
	for (const [langKey, url] of Object.entries(cluster)) {
		const code = HREFLANG_BY_KEY[langKey];
		if (!code || !url) continue;
		tags.push(`<link rel="alternate" hrefLang="${code}" href="${url}" />`);
	}
	if (cluster.en) {
		tags.push(`<link rel="alternate" hrefLang="x-default" href="${cluster.en}" />`);
	}
	return tags.join("");
};

/**
 * @param {string} siteUrl
 * @param {string} filePath relative to outDir using /
 * @param {boolean} trailingSlash
 */
const filePathToPermalink = (siteUrl, filePath, trailingSlash) => {
	const base = siteUrl.replace(/\/$/, "");
	let pathname = `/${filePath.replace(/\\/g, "/")}`;
	if (pathname.endsWith("/index.html")) {
		pathname = pathname.slice(0, -"index.html".length);
	} else if (pathname.endsWith(".html")) {
		pathname = pathname.slice(0, -".html".length);
		if (trailingSlash && !pathname.endsWith("/")) pathname = `${pathname}/`;
	}
	if (!pathname.startsWith("/")) pathname = `/${pathname}`;
	if (pathname === "") pathname = "/";
	if (trailingSlash && pathname !== "/" && !pathname.endsWith("/")) {
		pathname = `${pathname}/`;
	}
	if (pathname === "") pathname = "/";
	return `${base}${pathname}`;
};

const localeFromPathname = (pathname) => {
	const path = pathnameOf(pathname);
	for (const [prefix, locale] of LOCALE_PREFIXES) {
		if (path.startsWith(prefix)) return locale;
	}
	return "en";
};

const setHtmlLang = (html, lang) => {
	if (/<html\b[^>]*\blang=/.test(html)) {
		return html.replace(/(<html\b[^>]*\blang=)(?:"[^"]*"|[^\s>]+)/, `$1"${lang}"`);
	}
	return html.replace("<html", `<html lang="${lang}"`);
};

const setMetaContent = (html, attr, name, value) => {
	const unquoted = new RegExp(`(${attr}=${name} content=)(?:"[^"]*"|[^\\s>]+)`, "g");
	const quoted = new RegExp(`(${attr}="${name}" content=")[^"]+(")`, "g");
	return html.replace(unquoted, `$1${value}`).replace(quoted, `$1${value}$2`);
};

const stripHreflangLinks = (html) => html.replace(/<link\b[^>]*\bhreflang=[^>]*>/gi, "");

function pluginHreflangInject() {
	return {
		name: "docusaurus-plugin-hreflang-inject",
		async postBuild({ siteConfig, outDir }) {
			const fs = require("fs");
			const path = require("path");

			const manifestPath = path.join(outDir, "hreflang-manifest.json");
			let permalinkToKey = {};
			let clusters = {};
			if (fs.existsSync(manifestPath)) {
				const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
				permalinkToKey = manifest.permalinkToKey || {};
				clusters = manifest.clusters || {};
			} else {
				console.warn("hreflang-inject: hreflang-manifest.json not found; locale tags only");
			}

			const siteUrl = siteConfig.url || SITE;
			const trailingSlash = siteConfig.trailingSlash !== false;

			const walkHtml = (dir) => {
				const files = [];
				for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
					const full = path.join(dir, entry.name);
					if (entry.isDirectory()) {
						files.push(...walkHtml(full));
						continue;
					}
					if (entry.name.endsWith(".html")) files.push(full);
				}
				return files;
			};

			let rewritten = 0;
			let hreflangPages = 0;
			let canonicalPages = 0;

			for (const abs of walkHtml(outDir)) {
				let html = fs.readFileSync(abs, "utf8");
				// Client-redirect plugin pages already declare the destination canonical.
				if (/http-equiv="refresh"|http-equiv=refresh/i.test(html)) continue;

				const rel = path.relative(outDir, abs);
				const permalink = filePathToPermalink(siteUrl, rel, trailingSlash);
				const locale = localeFromPathname(permalink);
				const htmlLang = HTML_LANG[locale] || "en";
				const ogLocale = OG_LOCALE[locale] || "en_US";

				html = setHtmlLang(html, htmlLang);
				html = setMetaContent(html, "property", "og:locale", ogLocale);
				html = setMetaContent(html, "name", "docusaurus_locale", locale);
				html = setMetaContent(html, "name", "docsearch:language", locale);

				const canonical = canonicalFor(permalink);
				if (canonical) canonicalPages += 1;

				html = stripHreflangLinks(html);

				const clusterKey = permalinkToKey[canonical || permalink];
				const cluster = clusterKey ? clusters[clusterKey] : null;
				let tags = "";
				if (cluster && Object.keys(cluster).length >= 2) {
					tags = buildHreflangTags(cluster);
				} else {
					const self = canonical || permalink;
					const code = HREFLANG_BY_KEY[locale] || "en";
					tags = `<link rel="alternate" hrefLang="${code}" href="${self}" />`;
					if (locale === "en") {
						tags += `<link rel="alternate" hrefLang="x-default" href="${self}" />`;
					}
				}
				if (tags) hreflangPages += 1;

				let extras = tags;
				if (locale !== "en" && !/og:locale:alternate(?:=|\s)content="en_US"|og:locale:alternate content=en_US/.test(html)) {
					extras += `<meta property="og:locale:alternate" content="en_US" />`;
				}

				const marker = "</head>";
				const idx = html.indexOf(marker);
				if (idx !== -1 && extras) {
					html = `${html.slice(0, idx)}${extras}${html.slice(idx)}`;
				}

				if (canonical) {
					html = html.replace(/(rel=canonical href=)(?:"[^"]*"|[^\s>]+)/, `$1${canonical}`);
					html = html.replace(/(rel="canonical" href=")[^"]+(")/, `$1${canonical}$2`);
					html = html.replace(/(property=og:url content=)(?:"[^"]*"|[^\s>]+)/, `$1${canonical}`);
					html = html.replace(/(property="og:url" content=")[^"]+(")/, `$1${canonical}$2`);
				}

				fs.writeFileSync(abs, html, "utf8");
				rewritten += 1;
			}

			console.log(
				`✓ Locale SEO: rewrote ${rewritten} HTML pages (${hreflangPages} hreflang, ${canonicalPages} canonical overrides)`,
			);
		},
	};
}

module.exports = pluginHreflangInject;
