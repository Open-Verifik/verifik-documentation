/**
 * Build customer-facing RAG chunks from Verifik documentation sources.
 *
 * Usage:
 *   node scripts/build-rag-chunks.mjs
 *   node scripts/build-rag-chunks.mjs --locale=en
 *   node scripts/build-rag-chunks.mjs --locale=es
 *
 * Outputs:
 *   rag/chunks/*.md
 *   rag/manifest.json
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "rag");
const CHUNKS_DIR = path.join(OUT_DIR, "chunks");
const MANIFEST_PATH = path.join(OUT_DIR, "manifest.json");
const INVENTORY_PATH = path.join(ROOT, "internal", "docs-i18n-inventory.json");
const SITE_URL = "https://docs.verifik.co";

const SUPPORTED_EXT = new Set([".md", ".mdx"]);
const MIN_CHUNK_CHARS = 1600;
const MAX_CHUNK_CHARS = 4800;

const DOC_SOURCES = [
	{ root: "docs", locale: "en", urlPrefix: "" },
	{ root: "docs-es", locale: "es", urlPrefix: "/verifik-es" },
];

const EXCLUDED_TOP_LEVEL = new Set(["compensar"]);

const COUNTRY_TAGS = {
	argentina: "ar",
	bolivia: "bo",
	brazil: "br",
	canada: "ca",
	chile: "cl",
	colombia: "co",
	"costa-rica": "cr",
	"dominican-republic": "do",
	ecuador: "ec",
	"el-salvador": "sv",
	guatemala: "gt",
	honduras: "hn",
	mexico: "mx",
	panama: "pa",
	paraguay: "py",
	peru: "pe",
	spain: "es",
	uruguay: "uy",
	venezuela: "ve",
	"united-states": "us",
	identidad: "co",
};

const PRODUCT_TAGS = {
	smartcheck: "smartcheck",
	smartenroll: "smartenroll",
	"smart-batch": "smart-batch",
	"smart-scan": "smart-scan",
	smartaccess: "smartaccess",
	biometrics: "biometrics",
	authentication: "authentication",
};

const localeArg = process.argv.find((arg) => arg.startsWith("--locale="))?.split("=")[1];
const activeSources = localeArg
	? DOC_SOURCES.filter((source) => source.locale === localeArg)
	: DOC_SOURCES;

if (activeSources.length === 0) {
	console.error(`Unknown locale "${localeArg}". Use en and/or es.`);
	process.exit(1);
}

const slugify = (value) =>
	value
		.toLowerCase()
		.normalize("NFKD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")
		.replace(/-{2,}/g, "-")
		.slice(0, 80) || "section";

const walkDocs = (rootDir) => {
	const out = [];
	if (!fs.existsSync(rootDir)) return out;
	const stack = [rootDir];
	while (stack.length) {
		const current = stack.pop();
		for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
			const full = path.join(current, entry.name);
			if (entry.isDirectory()) {
				const rel = path.relative(rootDir, full).replace(/\\/g, "/");
				const top = rel.split("/")[0];
				if (EXCLUDED_TOP_LEVEL.has(top)) continue;
				stack.push(full);
				continue;
			}
			const ext = path.extname(entry.name).toLowerCase();
			if (SUPPORTED_EXT.has(ext)) out.push(full);
		}
	}
	return out.sort();
};

const parseFrontmatter = (raw) => {
	if (!raw.startsWith("---")) {
		return { data: {}, body: raw };
	}
	const end = raw.indexOf("\n---", 3);
	if (end === -1) {
		return { data: {}, body: raw };
	}
	const block = raw.slice(3, end).trim();
	const body = raw.slice(end + 4).replace(/^\s*\n/, "");
	const data = {};
	for (const line of block.split("\n")) {
		const match = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line);
		if (!match) continue;
		const [, key, rawValue] = match;
		let value = rawValue.trim();
		if (
			(value.startsWith('"') && value.endsWith('"')) ||
			(value.startsWith("'") && value.endsWith("'"))
		) {
			value = value.slice(1, -1);
		}
		data[key] = value;
	}
	return { data, body };
};

const stripCacheBypassForce = (content) => {
	let next = content.replace(/^- \*\*`force`\*\*.*\n/gm, "");
	next = next.replace(/^- Use \*\*`force=true`\*\* when you need to bypass cached MongoDB records\.\s*\n/gm, "");
	next = next
		.split("\n")
		.filter((line) => {
			if (!/\bforce\b/i.test(line)) return true;
			if (/^\| `force` \| string \|/i.test(line) && /cache|bypass|omitir|ignorar|跳过|バイパス|무시|ignorer/i.test(line)) {
				return false;
			}
			if (/^\|\s*force\s*\|/i.test(line) && /cache-bypass|bypass cache|bypass cached|mongo(db)? records/i.test(line)) {
				return false;
			}
			if (/^\|\s*force\s*\|/i.test(line) && /cache-bypass behavior when supported/i.test(line)) {
				return false;
			}
			return true;
		})
		.join("\n");
	return next;
};

const unwrapTabs = (content) => {
	let next = content;
	next = next.replace(/<Tabs[^>]*>\s*/g, "");
	next = next.replace(/<\/Tabs>\s*/g, "");
	next = next.replace(
		/<TabItem[^>]*value="([^"]+)"[^>]*label="([^"]+)"[^>]*>\s*/g,
		"\n\n#### $2\n\n"
	);
	next = next.replace(/<TabItem[^>]*label="([^"]+)"[^>]*>\s*/g, "\n\n#### $1\n\n");
	next = next.replace(/<\/TabItem>\s*/g, "\n");
	return next;
};

const cleanMdx = (content) => {
	let next = content;
	next = next.replace(/^import\s.+$/gm, "");
	next = next.replace(/^export\s+const\s+\w+\s*=\s*\{[\s\S]*?\};\s*/gm, "");
	next = next.replace(/^\s*"@context"\s*:\s*"https:\/\/schema\.org"[\s\S]*?\};\s*/gm, "");
	next = next.replace(/<script[\s\S]*?<\/script>\s*/g, "");
	next = next.replace(/<script[^>]*\/>\s*/g, "");
	next = next.replace(/<[^>]+>/g, "");
	next = unwrapTabs(next);
	next = stripCacheBypassForce(next);
	next = next.replace(/\n{3,}/g, "\n\n");
	return next.trim();
};

const normalizeEndpoint = (raw) => {
	if (!raw) return "";
	let next = raw
		.trim()
		.replace(/`/g, "")
		.replace(/^(get|post|put|patch|delete|head|options)\s+/i, "")
		.replace(/^https?:\/\/[^/]+\//, "")
		.replace(/^\/+/, "");

	const hashIdx = next.indexOf("#");
	if (hashIdx !== -1) next = next.slice(0, hashIdx);
	const queryIdx = next.indexOf("?");
	if (queryIdx !== -1) next = next.slice(0, queryIdx);

	next = next
		.replace(/\/+$/, "")
		.replace(/\/{2,}/g, "/")
		.replace(/[.,;)]+$/, "")
		.toLowerCase();

	return next;
};

const extractEndpoints = (text) => {
	const found = new Set();
	const patterns = [
		/https?:\/\/(?:api\.verifik\.co|verifik\.app)\/[^\s`'"]+/gi,
		/\b(?:GET|POST|PUT|PATCH|DELETE)\s+https?:\/\/[^\s`'"]+/gi,
		/\b(?:GET|POST|PUT|PATCH|DELETE)\s+\/?(?:v2|api)\/[^\s`'"]+/gi,
		/`(\/?(?:v2|api)\/[^`]+)`/gi,
	];
	for (const pattern of patterns) {
		for (const match of text.matchAll(pattern)) {
			const candidate = match[1] ?? match[0];
			const normalized = normalizeEndpoint(candidate);
			if (normalized) found.add(normalized);
		}
	}
	return [...found].sort();
};

const extractTitle = (frontmatter, body) => {
	if (frontmatter.title) return frontmatter.title.trim();
	const h1 = /^#\s+(.+)$/m.exec(body);
	return h1 ? h1[1].trim() : "Untitled";
};

const extractIntro = (body) => {
	const lines = body.split("\n");
	const intro = [];
	let started = false;
	for (const line of lines) {
		if (/^#\s+/.test(line)) {
			started = true;
			continue;
		}
		if (!started) continue;
		if (/^#{2,3}\s+/.test(line)) break;
		if (line.trim()) intro.push(line);
	}
	return intro.join("\n").trim();
};

const splitSections = (body) => {
	const lines = body.split("\n");
	const sections = [];
	let current = null;

	const pushCurrent = () => {
		if (!current) return;
		const content = current.lines.join("\n").trim();
		if (content) {
			sections.push({
				level: current.level,
				heading: current.heading,
				content,
			});
		}
		current = null;
	};

	for (const line of lines) {
		const match = /^(#{2,3})\s+(.+)$/.exec(line);
		if (match) {
			pushCurrent();
			current = {
				level: match[1].length,
				heading: match[2].trim(),
				lines: [line],
			};
			continue;
		}
		if (!current) {
			current = { level: 1, heading: "", lines: [] };
		}
		current.lines.push(line);
	}
	pushCurrent();
	return sections;
};

const sectionCharCount = (section) => section.content.length;

const mergeSections = (sections) => {
	if (sections.length === 0) return [];
	const merged = [];
	let buffer = null;

	const flush = () => {
		if (!buffer) return;
		merged.push(buffer);
		buffer = null;
	};

	for (const section of sections) {
		if (!buffer) {
			buffer = { ...section, headings: [section.heading].filter(Boolean) };
			continue;
		}
		const combinedCount = buffer.content.length + section.content.length;
		if (combinedCount <= MAX_CHUNK_CHARS && buffer.content.length < MIN_CHUNK_CHARS) {
			buffer.content = `${buffer.content}\n\n${section.content}`;
			if (section.heading) buffer.headings.push(section.heading);
			buffer.heading = buffer.headings[0] ?? buffer.heading;
			continue;
		}
		flush();
		buffer = { ...section, headings: [section.heading].filter(Boolean) };
	}
	flush();
	return merged;
};

const splitLargeSection = (section) => {
	if (section.content.length <= MAX_CHUNK_CHARS) return [section];
	const subSections = splitSections(section.content);
	if (subSections.length <= 1) {
		const paragraphs = section.content.split(/\n\n+/);
		const parts = [];
		let chunk = "";
		for (const paragraph of paragraphs) {
			const candidate = chunk ? `${chunk}\n\n${paragraph}` : paragraph;
			if (candidate.length > MAX_CHUNK_CHARS && chunk) {
				parts.push({ ...section, content: chunk.trim() });
				chunk = paragraph;
			} else {
				chunk = candidate;
			}
		}
		if (chunk.trim()) parts.push({ ...section, content: chunk.trim() });
		return parts.length ? parts : [section];
	}
	return mergeSections(subSections).flatMap((part) =>
		part.content.length > MAX_CHUNK_CHARS ? splitLargeSection(part) : [part]
	);
};

const buildChunksForDoc = ({ sourcePath, locale, urlPrefix, frontmatter, cleanedBody, title, intro, endpoints, category, tags, slug, skipDuplicate }) => {
	if (skipDuplicate) return [];

	const sections = splitSections(cleanedBody);
	let chunks = [];

	if (sections.length === 0) {
		chunks = [{ heading: "", headings: [], content: cleanedBody }];
	} else if (sections.length === 1 && cleanedBody.length <= MAX_CHUNK_CHARS) {
		chunks = [{ heading: sections[0].heading, headings: [sections[0].heading].filter(Boolean), content: cleanedBody }];
	} else {
		chunks = mergeSections(sections).flatMap((section) => splitLargeSection(section));
	}

	const baseId = slugify(`${locale}-${sourcePath.replace(/\.(mdx|md)$/, "")}`);

	return chunks.map((chunk, index) => {
		const headingSlug = chunk.heading ? slugify(chunk.heading) : "overview";
		const id = chunks.length === 1 ? baseId : `${baseId}-${headingSlug}${index > 0 ? `-${index + 1}` : ""}`;
		const contextLines = [`# ${title}`];
		if (endpoints.length) contextLines.push(`**API path(s):** ${endpoints.map((ep) => `/${ep}`).join(", ")}`);
		if (intro && !chunk.content.includes(intro.slice(0, 40))) contextLines.push("", intro);
		if (chunk.heading) contextLines.push("", `## ${chunk.heading}`);
		const body = `${contextLines.join("\n")}\n\n${chunk.content.replace(/^#{1,3}\s+.*\n/, "").trim()}`.trim();

		return {
			id,
			title: chunk.heading ? `${title} — ${chunk.heading}` : title,
			sourcePath,
			locale,
			category,
			tags: [...new Set(tags)],
			endpoints,
			sourceAnchor: chunk.heading || undefined,
			slug,
			url: slug ? `${SITE_URL}${urlPrefix}${slug.startsWith("/") ? slug : `/${slug}`}` : undefined,
			body,
		};
	});
};

const inferTags = (sourcePath, category, frontmatter, endpoints) => {
	const tags = new Set();
	const normalizedPath = sourcePath.toLowerCase();
	for (const [segment, code] of Object.entries(COUNTRY_TAGS)) {
		if (normalizedPath.includes(`/${segment}/`) || normalizedPath.includes(`/${segment}.`)) {
			tags.add(code);
		}
	}
	for (const [segment, tag] of Object.entries(PRODUCT_TAGS)) {
		if (normalizedPath.includes(segment)) tags.add(tag);
	}
	if (frontmatter.keywords) {
		for (const token of String(frontmatter.keywords).split(/[\s,]+/)) {
			const cleaned = token.replace(/['"]/g, "").trim();
			if (/^(v2|api)\//.test(cleaned) || /^\/(v2|api)\//.test(cleaned)) {
				tags.add(cleaned.replace(/^\/+/, "").split("/")[1] ?? cleaned);
			}
		}
	}
	for (const endpoint of endpoints) {
		const parts = endpoint.split("/");
		if (parts[0] === "v2" && parts[1]) tags.add(parts[1]);
	}
	if (category) tags.add(category);
	return [...tags].filter(Boolean);
};

const loadDuplicatePaths = () => {
	if (!fs.existsSync(INVENTORY_PATH)) return new Set();
	const inventory = JSON.parse(fs.readFileSync(INVENTORY_PATH, "utf8"));
	const duplicates = new Set();
	for (const row of inventory.canonical ?? []) {
		for (const duplicate of row.duplicatePaths ?? []) {
			duplicates.add(duplicate);
		}
	}
	return duplicates;
};

const serializeFrontmatter = (chunk) => {
	const lines = ["---"];
	const add = (key, value) => {
		if (value === undefined || value === null || value === "") return;
		if (Array.isArray(value)) {
			if (!value.length) return;
			lines.push(`${key}:`);
			for (const item of value) lines.push(`  - ${JSON.stringify(item)}`);
			return;
		}
		lines.push(`${key}: ${JSON.stringify(String(value))}`);
	};
	add("id", chunk.id);
	add("title", chunk.title);
	add("sourcePath", chunk.sourcePath);
	add("locale", chunk.locale);
	add("category", chunk.category);
	add("tags", chunk.tags);
	if (chunk.endpoints?.length === 1) add("endpoint", `/${chunk.endpoints[0]}`);
	if (chunk.endpoints?.length > 1) add("endpoints", chunk.endpoints.map((ep) => `/${ep}`));
	add("sourceAnchor", chunk.sourceAnchor);
	add("slug", chunk.slug);
	add("url", chunk.url);
	lines.push("---");
	return `${lines.join("\n")}\n\n${chunk.body}\n`;
};

const emptyDir = (dir) => {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
		return;
	}
	for (const entry of fs.readdirSync(dir)) {
		if (entry === ".gitkeep") continue;
		fs.rmSync(path.join(dir, entry), { recursive: true, force: true });
	}
};

const main = () => {
	const duplicatePaths = loadDuplicatePaths();
	const allChunks = [];

	for (const source of activeSources) {
		const rootDir = path.join(ROOT, source.root);
		const files = walkDocs(rootDir);
		for (const absPath of files) {
			const relToRoot = path.relative(ROOT, absPath).replace(/\\/g, "/");
			const relToDocs = path.relative(rootDir, absPath).replace(/\\/g, "/");
			const raw = fs.readFileSync(absPath, "utf8");
			const { data: frontmatter, body } = parseFrontmatter(raw);
			const cleanedBody = cleanMdx(body);
			if (!cleanedBody) continue;

			const title = extractTitle(frontmatter, cleanedBody);
			const intro = extractIntro(cleanedBody);
			const endpoints = extractEndpoints(cleanedBody);
			const category = relToDocs.split("/")[0] || "root";
			const slug = frontmatter.slug || undefined;
			const tags = inferTags(relToRoot, category, frontmatter, endpoints);
			const skipDuplicate = source.locale === "en" && duplicatePaths.has(relToDocs);

			const chunks = buildChunksForDoc({
				sourcePath: relToRoot,
				locale: source.locale,
				urlPrefix: source.urlPrefix,
				frontmatter,
				cleanedBody,
				title,
				intro,
				endpoints,
				category,
				tags,
				slug,
				skipDuplicate,
			});
			allChunks.push(...chunks);
		}
	}

	const seenIds = new Map();
	for (const chunk of allChunks) {
		let id = chunk.id;
		let suffix = 2;
		while (seenIds.has(id)) {
			id = `${chunk.id}-${suffix}`;
			suffix += 1;
		}
		seenIds.set(id, true);
		chunk.id = id;
	}

	emptyDir(CHUNKS_DIR);
	const manifestChunks = [];

	for (const chunk of allChunks) {
		const fileName = `${chunk.id}.md`;
		const serialized = serializeFrontmatter(chunk);
		fs.writeFileSync(path.join(CHUNKS_DIR, fileName), serialized, "utf8");
		manifestChunks.push({
			id: chunk.id,
			title: chunk.title,
			sourcePath: chunk.sourcePath,
			url: chunk.url,
			slug: chunk.slug,
			locale: chunk.locale,
			category: chunk.category,
			tags: chunk.tags,
			endpoints: chunk.endpoints.map((ep) => `/${ep}`),
			sourceAnchor: chunk.sourceAnchor,
			charCount: serialized.length,
			file: `rag/chunks/${fileName}`,
		});
	}

	const localeCounts = manifestChunks.reduce((acc, row) => {
		acc[row.locale] = (acc[row.locale] ?? 0) + 1;
		return acc;
	}, {});

	const manifest = {
		generatedAt: new Date().toISOString(),
		generator: "scripts/build-rag-chunks.mjs",
		totalChunks: manifestChunks.length,
		localeCounts,
		chunks: manifestChunks.sort((a, b) => a.id.localeCompare(b.id)),
	};

	fs.mkdirSync(OUT_DIR, { recursive: true });
	fs.writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

	const badEndpoints = manifestChunks
		.flatMap((chunk) => chunk.endpoints ?? [])
		.filter((endpoint) => /[?&=]/.test(endpoint));
	if (badEndpoints.length) {
		console.error(
			`Endpoint metadata must not contain query strings (${badEndpoints.length} bad value(s)):`,
			[...new Set(badEndpoints)].slice(0, 10)
		);
		process.exit(1);
	}

	console.log(`Generated ${manifest.totalChunks} chunks -> ${path.relative(ROOT, CHUNKS_DIR)}`);
	for (const [locale, count] of Object.entries(localeCounts)) {
		console.log(`  ${locale}: ${count}`);
	}
};

main();
