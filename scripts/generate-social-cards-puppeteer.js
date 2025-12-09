#!/usr/bin/env node

/**
 * Script to generate social sharing card images using Puppeteer
 * This method uses HTML/CSS templates for better text rendering and layout control
 * 
 * Prerequisites:
 *   npm install puppeteer
 * 
 * Usage:
 *   node scripts/generate-social-cards-puppeteer.js
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../static/img');
const TEMPLATE_PATH = path.join(__dirname, 'social-card-template.html');

/**
 * Generate social card image using Puppeteer
 */
async function generateSocialCard(locale) {
	const outputPath = path.join(OUTPUT_DIR, `verifik-social-card-${locale}.jpg`);

	console.log(`\nGenerating ${locale.toUpperCase()} social card using Puppeteer...`);

	let browser;
	try {
		// Launch browser
		browser = await puppeteer.launch({
			headless: true,
			args: ['--no-sandbox', '--disable-setuid-sandbox'],
		});

		const page = await browser.newPage();

		// Set viewport to exact card dimensions
		await page.setViewport({
			width: 1200,
			height: 630,
			deviceScaleFactor: 2, // 2x for retina quality
		});

		// Read HTML template
		let html = fs.readFileSync(TEMPLATE_PATH, 'utf8');

		// Switch to the appropriate language in body class
		html = html.replace(/<body class="[^"]*">/, `<body class="${locale}">`);

		// Load HTML
		await page.setContent(html, { waitUntil: 'networkidle0' });

		// Switch language using JavaScript in the browser
		await page.evaluate((loc) => {
			// Switch body class
			document.body.className = loc;
			
			// Update all elements with data attributes
			document.querySelectorAll('[data-en], [data-es]').forEach(el => {
				const text = el.getAttribute(`data-${loc}`);
				if (text) {
					el.textContent = text;
				}
			});
		}, locale);

		// Wait for logo image to load
		await page.waitForSelector('.logo img', { timeout: 5000 }).catch(() => {
			console.log('  ⚠️  Logo image may not have loaded, continuing anyway...');
		});

		// Wait for fonts and images to fully load (using Promise instead of deprecated waitForTimeout)
		await new Promise(resolve => setTimeout(resolve, 2000));

		// Take screenshot
		await page.screenshot({
			path: outputPath,
			type: 'jpeg',
			quality: 90,
			fullPage: false,
		});

		console.log(`✓ Created: ${outputPath}`);

	} catch (error) {
		console.error(`✗ Error generating ${locale} card:`, error.message);
		throw error;
	} finally {
		if (browser) {
			await browser.close();
		}
	}
}

/**
 * Main function
 */
async function main() {
	console.log('🚀 Verifik Social Cards Generator (Puppeteer)');
	console.log('============================================\n');

	// Check if template exists
	if (!fs.existsSync(TEMPLATE_PATH)) {
		console.error(`✗ Template not found: ${TEMPLATE_PATH}`);
		console.error('  Please ensure social-card-template.html exists in the scripts directory.');
		process.exit(1);
	}

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
		console.log('   2. Customize the template (social-card-template.html) with your brand colors');
		console.log('   3. Add your actual logo image to the template');
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

