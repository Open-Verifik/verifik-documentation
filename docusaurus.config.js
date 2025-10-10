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
	favicon: "img/favicon.ico",

	// Additional favicon links for better browser support
	headTags: [
		{
			tagName: "link",
			attributes: {
				rel: "icon",
				type: "image/x-icon",
				href: "/img/favicon.ico",
			},
		},
		{
			tagName: "link",
			attributes: {
				rel: "shortcut icon",
				type: "image/x-icon",
				href: "/img/favicon.ico",
			},
		},
		{
			tagName: "link",
			attributes: {
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/img/favicon.ico",
			},
		},
	],

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	// Set the production url of your site here
	url: "https://documentation.verifik.co",
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
				blog: false, // Disable blog
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
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
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
