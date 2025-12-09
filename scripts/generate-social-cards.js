#!/usr/bin/env node

/**
 * Script to generate social sharing card images for Verifik Documentation
 * 
 * This script generates both English and Spanish social card images (1200x630px)
 * using the Sharp library for image manipulation.
 * 
 * Prerequisites:
 *   npm install sharp
 * 
 * Usage:
 *   node scripts/generate-social-cards.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const https = require('https');

const OUTPUT_DIR = path.join(__dirname, '../static/img');
const CARD_WIDTH = 1200;
const CARD_HEIGHT = 630;

// Colors (adjust these to match Verifik brand colors)
const COLORS = {
	background: '#FFFFFF', // White background
	primary: '#000000', // Black text
	accent: '#0066FF', // Blue accent (adjust to brand color)
	textSecondary: '#666666', // Gray text
};

// Font configuration (adjust paths if using custom fonts)
const FONT_CONFIG = {
	family: 'Inter, Arial, sans-serif', // Use system fonts or add custom font
	size: {
		title: 48,
		tagline: 32,
		subtitle: 24,
	},
	weight: {
		title: 'bold',
		tagline: 'normal',
		subtitle: 'normal',
	},
};

// Content for each card
const CARD_CONTENT = {
	en: {
		title: 'Verifik Documentation',
		tagline: 'Identity Verification & KYC Solutions',
		subtitle: 'Everything you need to verify & authenticate users faster and easier',
	},
	es: {
		title: 'Documentación Verifik',
		tagline: 'Soluciones de Verificación de Identidad y KYC',
		subtitle: 'Todo lo que necesitas para verificar y autenticar usuarios más rápido y fácil',
	},
};

/**
 * Download file from URL
 */
function downloadFile(url, filepath) {
	return new Promise((resolve, reject) => {
		const file = fs.createWriteStream(filepath);
		https.get(url, (response) => {
			if (response.statusCode !== 200) {
				reject(new Error(`Failed to download: ${response.statusCode}`));
				return;
			}
			response.pipe(file);
			file.on('finish', () => {
				file.close();
				resolve();
			});
		}).on('error', (err) => {
			fs.unlink(filepath, () => {});
			reject(err);
		});
	});
}

/**
 * Create SVG with text (for simple text rendering)
 * Note: Sharp can render SVG, but complex layouts may require Canvas or other tools
 */
function createTextSVG(text, fontSize, x, y, color = COLORS.primary, fontWeight = 'normal') {
	return `
		<svg width="${CARD_WIDTH}" height="${CARD_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
			<text x="${x}" y="${y}" font-family="${FONT_CONFIG.family}" font-size="${fontSize}" font-weight="${fontWeight}" fill="${color}">
				${text}
			</text>
		</svg>
	`;
}

/**
 * Generate social card image
 */
async function generateSocialCard(locale) {
	const content = CARD_CONTENT[locale];
	const outputPath = path.join(OUTPUT_DIR, `verifik-social-card-${locale}.jpg`);

	console.log(`\nGenerating ${locale.toUpperCase()} social card...`);

	try {
		// Create base canvas with background color
		const canvas = sharp({
			create: {
				width: CARD_WIDTH,
				height: CARD_HEIGHT,
				channels: 3,
				background: COLORS.background,
			},
		});

		// TODO: Add logo overlay
		// For now, we'll create a simple text-based card
		// In production, you'd want to:
		// 1. Download the logo from https://cdn.verifik.co/LogoNegroSolo.svg
		// 2. Resize and position it appropriately
		// 3. Overlay it on the canvas

		// Create title text
		const titleSVG = createTextSVG(
			content.title,
			FONT_CONFIG.size.title,
			CARD_WIDTH / 2,
			150,
			COLORS.primary,
			FONT_CONFIG.weight.title
		);

		// Create tagline text
		const taglineSVG = createTextSVG(
			content.tagline,
			FONT_CONFIG.size.tagline,
			CARD_WIDTH / 2,
			220,
			COLORS.accent,
			FONT_CONFIG.weight.tagline
		);

		// Create subtitle text
		const subtitleSVG = createTextSVG(
			content.subtitle,
			FONT_CONFIG.size.subtitle,
			CARD_WIDTH / 2,
			280,
			COLORS.textSecondary,
			FONT_CONFIG.weight.subtitle
		);

		// Composite the text layers
		// Note: Sharp's SVG text rendering is limited. For better results, use:
		// - node-canvas
		// - puppeteer (with HTML/CSS)
		// - Or a design tool like Figma

		// For now, save a simple placeholder
		// In production, you'd composite all layers properly
		await canvas
			.composite([
				{
					input: Buffer.from(titleSVG),
					top: 0,
					left: 0,
				},
			])
			.jpeg({ quality: 90 })
			.toFile(outputPath);

		console.log(`✓ Created: ${outputPath}`);
		console.log(`  ⚠️  Note: This is a basic version. For production, use a design tool or enhance this script.`);

	} catch (error) {
		console.error(`✗ Error generating ${locale} card:`, error.message);
		throw error;
	}
}

/**
 * Main function
 */
async function main() {
	console.log('🚀 Verifik Social Cards Generator');
	console.log('================================\n');

	// Ensure output directory exists
	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR, { recursive: true });
		console.log(`Created output directory: ${OUTPUT_DIR}`);
	}

	try {
		// Generate both cards
		await generateSocialCard('en');
		await generateSocialCard('es');

		console.log('\n✅ Social cards generation complete!');
		console.log('\n📝 Next steps:');
		console.log('   1. Review the generated images in static/img/');
		console.log('   2. For production-quality cards, use a design tool (Figma, Canva, etc.)');
		console.log('   3. Or enhance this script with better text rendering (node-canvas, puppeteer)');
		console.log('   4. Test the cards using Facebook Debugger, Twitter Card Validator, etc.');
		console.log('\n📚 See SOCIAL_CARDS_GUIDE.md for detailed instructions.');

	} catch (error) {
		console.error('\n❌ Error:', error.message);
		process.exit(1);
	}
}

// Run if called directly
if (require.main === module) {
	main().catch(console.error);
}

module.exports = { generateSocialCard };

