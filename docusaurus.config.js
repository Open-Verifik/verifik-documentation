// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// i18n enabled: en (default), es

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Verifik",
	tagline: "Everything you need to verify & authenticate users faster and easier",
	favicon: "https://cdn.verifik.co/LogoNegroSolo.svg",

	// Additional favicon links and SEO metadata
	headTags: [
		{
			tagName: "link",
			attributes: {
				rel: "icon",
				type: "image/x-icon",
				href: "https://cdn.verifik.co/LogoNegroSolo.svg",
			},
		},
		{
			tagName: "link",
			attributes: {
				rel: "shortcut icon",
				type: "image/x-icon",
				href: "https://cdn.verifik.co/LogoNegroSolo.svg",
			},
		},
		{
			tagName: "link",
			attributes: {
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "https://cdn.verifik.co/LogoNegroSolo.svg",
			},
		},
		// SEO Meta Tags
		{
			tagName: "meta",
			attributes: {
				name: "keywords",
				content:
					"identity verification, KYC, KYB, biometric authentication, facial recognition, database screening, user onboarding, no-code verification, AML compliance, identity validation API, Verifik",
			},
		},
		{
			tagName: "meta",
			attributes: {
				name: "author",
				content: "Verifik",
			},
		},
		{
			tagName: "meta",
			attributes: {
				name: "robots",
				content: "index, follow",
			},
		},
		{
			tagName: "meta",
			attributes: {
				name: "googlebot",
				content: "index, follow",
			},
		},
		{
			tagName: "meta",
			attributes: {
				property: "og:site_name",
				content: "Verifik Documentation",
			},
		},
		{
			tagName: "meta",
			attributes: {
				property: "og:type",
				content: "website",
			},
		},
		{
			tagName: "meta",
			attributes: {
				property: "og:locale",
				content: "en_US",
			},
		},
		{
			tagName: "meta",
			attributes: {
				property: "og:locale:alternate",
				content: "es_ES",
			},
		},
		{
			tagName: "meta",
			attributes: {
				name: "twitter:card",
				content: "summary_large_image",
			},
		},
		{
			tagName: "meta",
			attributes: {
				name: "twitter:site",
				content: "@verifik",
			},
		},
		{
			tagName: "meta",
			attributes: {
				name: "twitter:creator",
				content: "@verifik",
			},
		},
	],

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	// Set the production url of your site here
	url: "https://docs.verifik.co",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",
	trailingSlash: false,

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "verifik", // Usually your GitHub org/user name.
	projectName: "verifik-documentation", // Usually your repo name.

	onBrokenLinks: "warn",

	// Internationalization configuration
	i18n: {
		defaultLocale: "en",
		locales: ["en", "es"],
		localeConfigs: {
			en: {
				label: "English",
				direction: "ltr",
				htmlLang: "en-US",
				calendar: "gregory",
			},
			es: {
				label: "Español",
				direction: "ltr",
				htmlLang: "es-ES",
				calendar: "gregory",
			},
		},
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: "./sidebars.js",
					routeBasePath: "", // Remove /docs prefix for English
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/Open-Verifik/verifik-documentation/tree/main/",
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: "all",
						title: "Verifik Blog",
						description: "Zero Knowledge Face Proofs and Digital Identity Blog",
						copyright: `Copyright © ${new Date().getFullYear()} Verifik.`,
						language: "en",
					},
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],

	plugins: [
		[
			"@docusaurus/plugin-content-docs",
			{
				id: "docs-es",
				path: "docs-es",
				routeBasePath: "docs-es",
				sidebarPath: "./sidebars-es.js",
				editUrl: "https://github.com/Open-Verifik/verifik-documentation/tree/main/",
			},
		],
		// Plugin to generate sitemap_index.xml for SEO requirements
		require.resolve('./src/plugins/sitemap-index.js'),
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// SEO: Social card image for Open Graph and Twitter Cards
			image: "img/docusaurus-social-card.jpg",
			navbar: {
				logo: {
					alt: "Verifik Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "dropdown",
						label: "Language",
						position: "left",
						items: [
							{
								type: "doc",
								docId: "intro",
								label: "English",
							},
							{
								type: "doc",
								docId: "intro",
								docsPluginId: "docs-es",
								label: "Español",
							},
						],
					},
					{
						type: "doc",
						docId: "intro",
						label: "Docs",
						position: "left",
					},
					{
						to: "/blog",
						label: "Blog",
						position: "left",
					},
					{
						type: "search",
						position: "right",
					},
					{
						to: "https://github.com/Open-Verifik/verifik-documentation",
						label: "GitHub",
						position: "right",
					},
				],
				hideOnScroll: true,
				style: "primary",
			},
			footer: {
				style: "light",
				links: [],
				copyright: `Copyright © ${new Date().getFullYear()} Verifik. All rights reserved.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
			sidebar: {
				hideable: true,
			},
			docs: {
				sidebar: {
					hideable: true,
				},
			},
		}),
};

export default config;
