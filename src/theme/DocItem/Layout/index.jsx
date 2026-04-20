/**
 * Swizzled DocItem/Layout: hreflang alternates + per-page og:locale for multilingual SEO.
 * Default layout logic from @docusaurus/theme-classic DocItem/Layout.
 */

import React from "react";
import clsx from "clsx";
import Head from "@docusaurus/Head";
import { useWindowSize } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import DocItemPaginator from "@theme/DocItem/Paginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import DocVersionBadge from "@theme/DocVersionBadge";
import DocItemFooter from "@theme/DocItem/Footer";
import DocItemTOCMobile from "@theme/DocItem/TOC/Mobile";
import DocItemTOCDesktop from "@theme/DocItem/TOC/Desktop";
import DocItemContent from "@theme/DocItem/Content";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import ContentVisibility from "@theme/ContentVisibility";

import manifest from "@site/static/hreflang-manifest.json";
import styles from "./styles.module.css";

/** @type {Record<string, string>} */
const HREFLANG_BY_KEY = {
	en: "en",
	es: "es",
	fr: "fr",
	pt: "pt",
	ko: "ko",
	ja: "ja",
	zh: "zh-Hans",
};

const normalizePermalink = (permalink, siteUrl) => {
	if (!permalink) return "";
	const base = siteUrl.replace(/\/$/, "");
	if (/^https?:\/\//i.test(permalink)) {
		const u = permalink.endsWith("/") ? permalink : `${permalink}/`;
		return u;
	}
	const path = permalink.startsWith("/") ? permalink : `/${permalink}`;
	const withSlash = path.endsWith("/") ? path : `${path}/`;
	return `${base}${withSlash}`;
};

function useDocTOC() {
	const { frontMatter, toc } = useDoc();
	const windowSize = useWindowSize();
	const hidden = frontMatter.hide_table_of_contents;
	const canRender = !hidden && toc.length > 0;
	const mobile = canRender ? <DocItemTOCMobile /> : undefined;
	const desktop =
		canRender && (windowSize === "desktop" || windowSize === "ssr") ? (
			<DocItemTOCDesktop />
		) : undefined;
	return {
		hidden,
		mobile,
		desktop,
	};
}

/**
 * @param {Record<string, string>} cluster
 */
const hreflangHead = (cluster) => {
	if (!cluster || Object.keys(cluster).length < 2) return null;

	const links = [];
	for (const [langKey, url] of Object.entries(cluster)) {
		const code = HREFLANG_BY_KEY[langKey];
		if (!code || !url) continue;
		links.push(<link key={code} rel="alternate" hrefLang={code} href={url} />);
	}
	const enUrl = cluster.en;
	if (enUrl) {
		links.push(<link key="x-default" rel="alternate" hrefLang="x-default" href={enUrl} />);
	}
	return <>{links}</>;
};

export default function DocItemLayout({ children }) {
	const docTOC = useDocTOC();
	const { metadata } = useDoc();
	const {
		siteConfig: { url: siteUrl },
	} = useDocusaurusContext();

	const permalinkNorm = normalizePermalink(metadata.permalink, siteUrl);
	const logicalKey = manifest.permalinkToKey[permalinkNorm];
	const cluster = logicalKey ? manifest.clusters[logicalKey] : null;

	return (
		<div className="row">
			<Head>{cluster ? hreflangHead(cluster) : null}</Head>
			<div className={clsx("col", !docTOC.hidden && styles.docItemCol)}>
				<ContentVisibility metadata={metadata} />
				<DocVersionBanner />
				<div className={styles.docItemContainer}>
					<article>
						<DocBreadcrumbs />
						<DocVersionBadge />
						{docTOC.mobile}
						<DocItemContent>{children}</DocItemContent>
						<DocItemFooter />
					</article>
					<DocItemPaginator />
				</div>
			</div>
			{docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
		</div>
	);
}
