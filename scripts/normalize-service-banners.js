#!/usr/bin/env node

/**
 * Normalize service banner images under static/img/services/.
 * Adds safe padding and re-draws wordmarks where source PNGs clip text.
 *
 * Usage: node scripts/normalize-service-banners.js
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const SERVICES_DIR = path.join(__dirname, "../static/img/services");
const PADDING = { top: 40, right: 40, bottom: 56, left: 40 };
const ICON = { width: 200, height: 180, top: 24, left: 24 };
const SKIP_FILES = new Set(["database-screening.png"]);

const TEXT_FIXES = {
	"smartaccess.png": { label: "smartAccess", textY: 332, fontSize: 58, maskTop: 200 },
	"access.png": { label: "Access", textY: 332, fontSize: 68, maskTop: 200 },
	"smartenroll.png": { label: "SmartEnroll", textY: 332, fontSize: 58, maskTop: 200 },
	"enroll.png": { label: "Enroll", textY: 332, fontSize: 68, maskTop: 200 },
};

const buildWordmarkSvg = (width, height, { label, textY, fontSize, maskTop }) =>
	Buffer.from(`
		<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
			<rect x="0" y="${maskTop}" width="${width}" height="${height - maskTop}" fill="rgba(10, 12, 16, 0.9)" />
			<text
				x="36"
				y="${textY}"
				font-family="Inter, Arial, Helvetica, sans-serif"
				font-size="${fontSize}"
				font-weight="700"
				fill="#FFFFFF"
			>${label}</text>
		</svg>
	`);

const addPadding = (image) =>
	image.extend({
		top: PADDING.top,
		bottom: PADDING.bottom,
		left: PADDING.left,
		right: PADDING.right,
		extendWith: "copy",
	});

const fixClippedWordmark = async (inputPath, textFix) => {
	const { width, height } = await sharp(inputPath).metadata();
	const iconWidth = Math.min(ICON.width, width);
	const iconHeight = Math.min(ICON.height, height);

	const [blurredBackground, icon] = await Promise.all([
		sharp(inputPath).blur(28).toBuffer(),
		sharp(inputPath).extract({ left: 0, top: 0, width: iconWidth, height: iconHeight }).toBuffer(),
	]);

	return sharp(blurredBackground).composite([
		{ input: icon, top: ICON.top, left: ICON.left },
		{ input: buildWordmarkSvg(width, height, textFix), top: 0, left: 0 },
	]);
};

const normalizeBanner = async (filename) => {
	if (SKIP_FILES.has(filename)) {
		console.log(`Skipped ${filename}`);
		return;
	}

	const inputPath = path.join(SERVICES_DIR, filename);
	const textFix = TEXT_FIXES[filename];
	let pipeline = textFix ? await fixClippedWordmark(inputPath, textFix) : sharp(inputPath);

	await addPadding(pipeline).png({ compressionLevel: 9 }).toFile(`${inputPath}.tmp`);
	fs.renameSync(`${inputPath}.tmp`, inputPath);
	console.log(`Normalized ${filename}`);
};

const main = async () => {
	const files = fs.readdirSync(SERVICES_DIR).filter((file) => file.endsWith(".png"));

	for (const file of files) {
		await normalizeBanner(file);
	}
};

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
