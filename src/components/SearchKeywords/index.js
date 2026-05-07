import React from "react";
import styles from "./SearchKeywords.module.css";
import synonyms from "../../../internal/search-synonyms.json";

const COUNTRY_BY_CODE = new Map((synonyms.countries || []).map((c) => [c.code, c]));
const PRODUCT_BY_NAME = new Map((synonyms.products || []).map((p) => [p.canonical.toLowerCase(), p]));
const DOCUMENT_BY_NAME = new Map((synonyms.documents || []).map((d) => [d.canonical.toLowerCase(), d]));

const dedupe = (values) => Array.from(new Set(values.filter(Boolean).map((v) => String(v).trim()).filter((v) => v.length > 0)));

const expandCountry = (token) => {
	const country = COUNTRY_BY_CODE.get(String(token).toUpperCase());
	if (!country) return [token];
	return [country.code, ...(country.names || []), ...(country.aliases || [])];
};

const expandProduct = (token) => {
	const product = PRODUCT_BY_NAME.get(String(token).toLowerCase());
	if (!product) return [token];
	return [product.canonical, ...(product.aliases || [])];
};

const expandDocument = (token) => {
	const doc = DOCUMENT_BY_NAME.get(String(token).toLowerCase());
	if (!doc) return [token];
	return [doc.canonical, ...(doc.aliases || [])];
};

/**
 * Renders a small, visible block of search-friendly keywords below a doc page.
 * Authors pass any combination of:
 *   - countries: ISO codes (e.g. ["CO", "MX"]) — expanded via internal/search-synonyms.json
 *   - products:  canonical product/term names (e.g. ["KYC", "biometrics"])
 *   - documents: canonical document names (e.g. ["cedula", "EPIC"])
 *   - apiPaths:  raw API path fragments (e.g. ["v2/co/cedula"])
 *   - extra:     free-form additional terms
 *
 * Lunr (build-time local search) indexes the rendered text, so users can find
 * the page by typing any synonym from the central map.
 */
export default function SearchKeywords({ countries = [], products = [], documents = [], apiPaths = [], extra = [], heading = "Also known as" }) {
	const items = dedupe([
		...countries.flatMap(expandCountry),
		...products.flatMap(expandProduct),
		...documents.flatMap(expandDocument),
		...apiPaths,
		...extra,
	]);

	if (items.length === 0) return null;

	return (
		<aside className={styles.wrapper} aria-label="Search keywords">
			<div className={styles.heading}>{heading}</div>
			<ul className={styles.chips}>
				{items.map((term) => (
					<li key={term} className={styles.chip}>
						{term}
					</li>
				))}
			</ul>
		</aside>
	);
}
