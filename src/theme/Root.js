import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";
import { LanguageProvider } from "@site/src/contexts/CodeLanguageContext";
import { ThemeProvider } from "@site/src/contexts/ThemeContext";
import SocialCardMeta from "@site/src/components/SocialCardMeta";

// Component to inject JSON-LD structured data for SEO
function StructuredData() {
	const { siteConfig } = useDocusaurusContext();
	const location = useLocation();

	// Organization schema
	const organizationSchema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "Verifik",
		url: siteConfig.url,
		logo: "https://cdn.verifik.co/LogoNegroSolo.svg",
		description:
			"Verifik offers no-code identity verification solutions with KYC/KYB, biometric authentication, facial recognition, and database screening.",
		sameAs: [
			"https://github.com/Open-Verifik/verifik-documentation",
		],
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "Customer Service",
			url: siteConfig.url,
		},
	};

	// WebSite schema for better search visibility
	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Verifik Documentation",
		url: siteConfig.url,
		description:
			"Complete documentation for Verifik identity verification solutions including KYC, KYB, biometric authentication, facial recognition, and database screening.",
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${siteConfig.url}search?q={search_term_string}`,
			},
			"query-input": "required name=search_term_string",
		},
	};

	// BreadcrumbList schema - helps Google show breadcrumbs in search results
	// Dynamically generate based on current path
	const generateBreadcrumbList = () => {
		const path = location.pathname;
		const pathSegments = path.split("/").filter(Boolean);
		
		const breadcrumbItems = [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: siteConfig.url,
			},
		];

		let currentPath = "";
		pathSegments.forEach((segment, index) => {
			currentPath += `/${segment}`;
			breadcrumbItems.push({
				"@type": "ListItem",
				position: index + 2,
				name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
				item: `${siteConfig.url}${currentPath}`,
			});
		});

		return {
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: breadcrumbItems,
		};
	};

	const breadcrumbSchema = generateBreadcrumbList();

	return (
		<>
			<script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
			<script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
			<script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
		</>
	);
}

// Wrapper component to provide contexts to all pages
export default function Root({ children }) {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<StructuredData />
				<SocialCardMeta />
				{children}
			</LanguageProvider>
		</ThemeProvider>
	);
}
