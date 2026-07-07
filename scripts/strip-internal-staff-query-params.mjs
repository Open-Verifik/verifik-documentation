/**
 * Remove internal Staff-only query param `force` (cache bypass) from client-facing MDX.
 *
 * Usage:
 *   node scripts/strip-internal-staff-query-params.mjs
 *   node scripts/strip-internal-staff-query-params.mjs --path=docs-es/validacion-vehiculos/chile/vehicle-soap-plate.mdx
 *   node scripts/strip-internal-staff-query-params.mjs --scan-all
 *
 * Does NOT touch unrelated client `force` flags (e.g. boolean on Resources app-registration docs).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
const scanAll = args.includes("--scan-all");
const pathArg = args.find((a) => a.startsWith("--path="))?.split("=")[1];

const DOC_ROOTS = ["docs", "docs-es", "docs-fr", "docs-pt", "docs-ko", "docs-ja", "docs-zh"];
const DOC_EXTENSIONS = [".mdx", ".md"];

const FORCE_BULLET = /^- \*\*`force`\*\*.*\n/m;
const FORCE_TABLE_ROW = /^\| `force` \| string \|.*\n/m;

const isCacheBypassForceTableRow = (line) =>
	/^\| `force` \| string \|/i.test(line) && /cache|caché|bypass|omitir|ignorar|跳过|バイパス|무시|ignorer/i.test(line);

const stripContent = (content) => {
	let next = content.replace(FORCE_BULLET, "");
	next = next
		.split("\n")
		.filter((line) => !isCacheBypassForceTableRow(`${line}\n`))
		.join("\n");
	return next;
};

const walk = (dir, out = []) => {
	if (!fs.existsSync(dir)) return out;
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) walk(full, out);
		else if (DOC_EXTENSIONS.some((ext) => entry.name.endsWith(ext))) out.push(full);
	}
	return out;
};

const targets = () => {
	if (pathArg) return [path.resolve(ROOT, pathArg)];
	if (scanAll) return DOC_ROOTS.flatMap((folder) => walk(path.join(ROOT, folder)));
	return DOC_ROOTS.map((folder) => path.join(ROOT, folder, "vehicle-validation/chile/vehicle-soap-plate.mdx")).concat(
		path.join(ROOT, "docs-es/validacion-vehiculos/chile/vehicle-soap-plate.mdx")
	);
};

let changed = 0;
for (const file of targets()) {
	if (!fs.existsSync(file)) continue;
	const before = fs.readFileSync(file, "utf8");
	const after = stripContent(before);
	if (after === before) continue;
	fs.writeFileSync(file, after, "utf8");
	console.log("stripped force:", path.relative(ROOT, file));
	changed += 1;
}

console.log(`done (${changed} file(s) updated)`);
