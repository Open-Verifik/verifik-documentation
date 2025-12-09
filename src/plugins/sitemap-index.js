/**
 * Docusaurus plugin to generate sitemap_index.xml
 * This creates a sitemap index file that references the main sitemap.xml
 * as required by SEO standards.
 */

function pluginSitemapIndex(context, options) {
	return {
		name: 'docusaurus-plugin-sitemap-index',
		async postBuild({ siteConfig, outDir }) {
			const fs = require('fs').promises;
			const path = require('path');
			
			const baseUrl = siteConfig.baseUrl || '/';
			const url = siteConfig.url || 'https://docs.verifik.co';
			
			// Generate sitemap_index.xml content
			const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${url}${baseUrl.replace(/\/$/, '')}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
</sitemapindex>`;

			// Write sitemap_index.xml to build output
			const sitemapIndexPath = path.join(outDir, 'sitemap_index.xml');
			await fs.writeFile(sitemapIndexPath, sitemapIndexContent, 'utf8');
			
			console.log('✓ Generated sitemap_index.xml');
		},
	};
}

module.exports = pluginSitemapIndex;

