/**
 * List English MDX files missing in partial locale folders, prioritized for translation.
 *
 * Usage (from verifik-documentation):
 *   node scripts/partial-locale-gap-report.mjs [--locale=zh] [--only=regex] [--json]
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
const ONLY = getOpt('only') ? new RegExp(getOpt('only'), 'i') : null;
const AS_JSON = args.includes('--json');

const LOCALE_FOLDERS = {
	zh: 'docs-zh',
	ja: 'docs-ja',
	ko: 'docs-ko',
	fr: 'docs-fr',
	pt: 'docs-pt',
};

const FEATURES_JSON = path.resolve(
	ROOT,
	'../verifik/verifik-backend/scripts/app-features-final.json'
);
const I18N_ZH = path.resolve(
	ROOT,
	'../Smart-Agent/frontend/public/i18n/features-zh.json'
);

const GENERIC_DESCRIPTIONS = new Set([
	'Provides reliable verification and validation services.',
	'Proporciona servicios confiables de verificación y validación.',
	'提供可靠的验证和验证服务。',
]);

const walkMdx = (root) => {
	if (!fs.existsSync(root)) return [];
	const out = [];
	const stack = [root];
	while (stack.length) {
		const current = stack.pop();
		for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
			const full = path.join(current, entry.name);
			if (entry.isDirectory()) stack.push(full);
			else if (/\.mdx?$/i.test(entry.name)) out.push(full);
		}
	}
	return out.sort();
};

const priorityFor = (rel) => {
	if (/business-validation\/colombia|rues|dian|legal-invoicer/i.test(rel)) return 1;
	if (/identity-validation\/colombia|identity\/colombia|identity\/ecuador|identity\/bolivia|identity\/peru/i.test(rel))
		return 2;
	if (/vehicle-validation\/colombia|vehicle-validation\/ecuador|vehicle-validation\/bolivia/i.test(rel))
		return 3;
	if (/background-check\/colombia|certificates\/colombia/i.test(rel)) return 4;
	if (/vehicle-validation\//i.test(rel)) return 5;
	if (/identity-validation\/|identity\//i.test(rel)) return 6;
	if (/business-validation\//i.test(rel)) return 7;
	return 9;
};

const main = () => {
	const localeFolder = LOCALE_FOLDERS[LOCALE];
	if (!localeFolder) {
		console.error(`Unknown locale: ${LOCALE}`);
		process.exit(1);
	}

	const enRoot = path.join(ROOT, 'docs');
	const locRoot = path.join(ROOT, localeFolder);
	const enRel = new Set(walkMdx(enRoot).map((f) => path.relative(enRoot, f)));
	const locRel = new Set(walkMdx(locRoot).map((f) => path.relative(locRoot, f)));

	let missing = [...enRel].filter((r) => !locRel.has(r));
	if (ONLY) missing = missing.filter((r) => ONLY.test(r));

	const genericCodes = new Set();
	if (fs.existsSync(I18N_ZH)) {
		const zh = JSON.parse(fs.readFileSync(I18N_ZH, 'utf8')).appFeatures || {};
		for (const [code, entry] of Object.entries(zh)) {
			if (GENERIC_DESCRIPTIONS.has(entry?.description?.trim())) genericCodes.add(code);
		}
	}

	const urlToCode = new Map();
	if (fs.existsSync(FEATURES_JSON)) {
		for (const f of JSON.parse(fs.readFileSync(FEATURES_JSON, 'utf8'))) {
			if (!f.code || !f.url) continue;
			const url = f.url
				.replace(/^https?:\/\/[^/]+\//, '')
				.replace(/^\/+/, '')
				.toLowerCase();
			urlToCode.set(url, f.code);
		}
	}

	const rows = missing.map((rel) => ({
		relPath: rel,
		enPath: path.join('docs', rel),
		outPath: path.join(localeFolder, rel),
		priority: priorityFor(rel),
	}));

	rows.sort((a, b) => a.priority - b.priority || a.relPath.localeCompare(b.relPath));

	const outDir = path.join(ROOT, 'internal');
	if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
	const outFile = path.join(outDir, `translation-gaps-${LOCALE}.json`);
	fs.writeFileSync(
		outFile,
		JSON.stringify(
			{
				locale: LOCALE,
				generatedAt: new Date().toISOString(),
				missingCount: rows.length,
				items: rows,
			},
			null,
			2
		) + '\n',
		'utf8'
	);

	if (AS_JSON) {
		console.log(JSON.stringify(rows.slice(0, 50), null, 2));
	} else {
		console.log(`Locale: ${LOCALE} (${localeFolder})`);
		console.log(`Missing: ${rows.length} files`);
		console.log(`Report: ${outFile}`);
		console.log('\nTop 20 by priority:');
		for (const row of rows.slice(0, 20)) {
			console.log(`  P${row.priority}  ${row.relPath}`);
		}
	}
};

main();
