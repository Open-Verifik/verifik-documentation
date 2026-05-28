/**
 * Scaffold a partial-locale MDX from English source (structure + localized section headers).
 * Agent/human fills translated title, description, and body prose.
 *
 * Usage:
 *   node scripts/scaffold-partial-locale-doc.mjs --locale=zh --en=docs/business-validation/colombia-rues-v3.mdx
 *   node scripts/scaffold-partial-locale-doc.mjs --locale=zh --en=docs/business-validation/colombia-rues-v3.mdx --title="..." --description="..."
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const getOpt = (name) => {
	const e = args.find((a) => a.startsWith(`--${name}=`));
	return e ? e.slice(name.length + 3) : null;
};

const LOCALE = getOpt('locale') || 'zh';
const EN_PATH = getOpt('en');
const TITLE = getOpt('title');
const DESC = getOpt('description');
const DRY_RUN = args.includes('--dry-run');

const LOCALE_FOLDERS = { zh: 'docs-zh', ja: 'docs-ja', ko: 'docs-ko', fr: 'docs-fr', pt: 'docs-pt' };

const SECTION_MAP = {
	zh: {
		endpoint: '端点',
		headers: '标头',
		parameters: '参数',
		request: '请求',
		response: '响应',
		notes: '说明',
	},
	ja: {
		endpoint: 'エンドポイント',
		headers: 'ヘッダー',
		parameters: 'パラメータ',
		request: 'リクエスト',
		response: 'レスポンス',
		notes: '注意',
	},
	ko: {
		endpoint: '엔드포인트',
		headers: '헤더',
		parameters: '매개변수',
		request: '요청',
		response: '응답',
		notes: '참고',
	},
	fr: {
		endpoint: "Point d'accès",
		headers: 'En-têtes',
		parameters: 'Paramètres',
		request: 'Requête',
		response: 'Réponse',
		notes: 'Notes',
	},
	pt: {
		endpoint: 'Ponto de acesso',
		headers: 'Cabeçalhos',
		parameters: 'Parâmetros',
		request: 'Requisição',
		response: 'Resposta',
		notes: 'Notas',
	},
};

const parseFrontmatter = (text) => {
	if (!text.startsWith('---')) return { meta: {}, body: text };
	const end = text.indexOf('\n---', 3);
	const block = text.slice(3, end).trim();
	const body = text.slice(end + 4);
	const meta = {};
	for (const line of block.split('\n')) {
		const m = line.match(/^(\w+):\s*(.+)$/);
		if (!m) continue;
		let v = m[2].trim();
		if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
			v = v.slice(1, -1);
		}
		meta[m[1]] = v;
	}
	return { meta, body };
};

const extractEndpointBlock = (body) => {
	const m = /###\s+Endpoint\s*\n+```[a-z]*\s*\n([\s\S]*?)```/i.exec(body);
	return m ? m[1].trim() : null;
};

const localizeSectionHeaders = (body, locale) => {
	const labels = SECTION_MAP[locale];
	if (!labels) return body;
	let out = body;
	const pairs = [
		[/###\s+Endpoint/gi, `### ${labels.endpoint}`],
		[/###\s+Headers/gi, `### ${labels.headers}`],
		[/###\s+Parameters/gi, `### ${labels.parameters}`],
		[/###\s+Request/gi, `### ${labels.request}`],
		[/###\s+Response/gi, `### ${labels.response}`],
		[/###\s+Notes/gi, `### ${labels.notes}`],
	];
	for (const [re, rep] of pairs) out = out.replace(re, rep);
	return out;
};

const main = () => {
	if (!EN_PATH) {
		console.error('Missing --en=docs/... path');
		process.exit(1);
	}
	const localeFolder = LOCALE_FOLDERS[LOCALE];
	if (!localeFolder) {
		console.error(`Unknown locale: ${LOCALE}`);
		process.exit(1);
	}

	const enAbs = path.isAbsolute(EN_PATH) ? EN_PATH : path.join(ROOT, EN_PATH);
	if (!fs.existsSync(enAbs)) {
		console.error(`Not found: ${enAbs}`);
		process.exit(1);
	}

	const enRel = path.relative(path.join(ROOT, 'docs'), enAbs);
	const outAbs = path.join(ROOT, localeFolder, enRel);
	const raw = fs.readFileSync(enAbs, 'utf8');
	const { meta, body } = parseFrontmatter(raw);
	const endpointBlock = extractEndpointBlock(body);
	const labels = SECTION_MAP[LOCALE];

	const title = TITLE || meta.title || 'TODO: translate title';
	const description = DESC || meta.description || 'TODO: translate description';
	const slug = meta.slug || `/${enRel.replace(/\.mdx?$/, '')}`;

	let scaffoldBody = '';
	if (endpointBlock && labels) {
		scaffoldBody = `import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### ${labels.endpoint}

\`\`\`
${endpointBlock.split('\n')[0].startsWith('GET') || endpointBlock.split('\n')[0].startsWith('POST') ? endpointBlock.split('\n')[0] : `GET ${endpointBlock.split('\n')[0]}`}
\`\`\`

<!-- TODO: translate intro prose from English doc -->

${localizeSectionHeaders(body, LOCALE)}
`;
	} else {
		scaffoldBody = localizeSectionHeaders(body, LOCALE);
	}

	const out = `---
id: ${meta.id || path.basename(enRel, path.extname(enRel))}
title: ${title.includes(':') || title.includes('"') ? `"${title.replace(/"/g, '\\"')}"` : title}
description: ${description.includes(':') || description.includes('"') ? `"${description.replace(/"/g, '\\"')}"` : description}
slug: ${slug}
---

${scaffoldBody}`;

	if (DRY_RUN) {
		console.log(out.slice(0, 800));
		return;
	}

	fs.mkdirSync(path.dirname(outAbs), { recursive: true });
	fs.writeFileSync(outAbs, out, 'utf8');
	console.log(`Wrote ${path.relative(ROOT, outAbs)}`);
};

main();
