/**
 * Endpoint alias generator (Lunr-friendly).
 *
 * Lunr's default tokenizer splits on whitespace and hyphens but NOT on slashes,
 * so a path like "v2/co/cedula" becomes a single token and queries for
 * "cedula", "co", or "/api/co/cedula" never hit it.
 *
 * This helper expands a normalized endpoint path (already produced by
 * scripts/inventory-docs-endpoints.js) into a deduped list of search-friendly
 * variants that, when added to a doc's front-matter `keywords`, surface that
 * doc for any reasonable URL fragment a user might type.
 */

const HTTP_VERBS = ["GET"];

const stripBraces = (value) => value.replace(/\{[^}]+\}/g, "").replace(/\/+/g, "/").replace(/\/$/, "");

const dedupe = (values) => {
	const seen = new Set();
	const out = [];
	for (const raw of values) {
		if (raw === undefined || raw === null) continue;
		const trimmed = String(raw).trim();
		if (!trimmed) continue;
		const key = trimmed.toLowerCase();
		if (seen.has(key)) continue;
		seen.add(key);
		out.push(trimmed);
	}
	return out;
};

/**
 * Expand a single normalized endpoint string into search aliases.
 *
 * @param {string} endpointUrl Normalized path (no protocol, no host, no leading slash)
 * @param {object} [opts]
 * @param {string} [opts.host="api.verifik.co"] Production host for full-URL forms
 * @returns {string[]} Deduped alias list
 */
const aliasesFor = (endpointUrl, opts = {}) => {
	const host = opts.host || "api.verifik.co";
	const cleanCanonical = String(endpointUrl || "").replace(/^\/+/, "").trim();
	if (!cleanCanonical) return [];

	const cleanWithoutBraces = stripBraces(cleanCanonical);

	const segmentsWithBraces = cleanCanonical.split("/").filter(Boolean);
	const segmentsClean = cleanWithoutBraces.split("/").filter(Boolean);

	const out = [];

	out.push(cleanCanonical);
	out.push(`/${cleanCanonical}`);

	if (cleanWithoutBraces && cleanWithoutBraces !== cleanCanonical) {
		out.push(cleanWithoutBraces);
		out.push(`/${cleanWithoutBraces}`);
	}

	if (segmentsClean.length > 1) {
		out.push(segmentsClean.join(" "));
	}

	if (segmentsWithBraces.length > 1 && segmentsWithBraces.join(" ") !== segmentsClean.join(" ")) {
		out.push(segmentsWithBraces.join(" "));
	}

	if (segmentsClean.length > 1 && /^v\d+$/i.test(segmentsClean[0])) {
		const dropVersion = segmentsClean.slice(1).join("/");
		out.push(dropVersion);
		out.push(`/${dropVersion}`);
		out.push(`api/${dropVersion}`);
		out.push(`/api/${dropVersion}`);
		out.push(`api ${segmentsClean.slice(1).join(" ")}`);

		for (let i = 1; i < segmentsClean.length - 1; i += 1) {
			const partial = segmentsClean.slice(i).join("/");
			out.push(partial);
			out.push(`/${partial}`);
		}
	} else if (segmentsClean.length > 1) {
		for (let i = 1; i < segmentsClean.length - 1; i += 1) {
			const partial = segmentsClean.slice(i).join("/");
			out.push(partial);
			out.push(`/${partial}`);
		}
	}

	out.push(`${host}/${cleanCanonical}`);
	out.push(`https://${host}/${cleanCanonical}`);

	for (const verb of HTTP_VERBS) {
		out.push(`${verb} ${cleanCanonical}`);
		out.push(`${verb} /${cleanCanonical}`);
	}

	return dedupe(out);
};

/**
 * Merge alias arrays for many endpoints, dedup across the whole set.
 *
 * @param {string[]} endpointUrls
 * @param {object} [opts]
 * @returns {string[]}
 */
const aliasesForMany = (endpointUrls, opts = {}) => {
	const all = [];
	for (const url of endpointUrls) {
		for (const a of aliasesFor(url, opts)) all.push(a);
	}
	return dedupe(all);
};

module.exports = {
	aliasesFor,
	aliasesForMany,
	dedupe,
};
