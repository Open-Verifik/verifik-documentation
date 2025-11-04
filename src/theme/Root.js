import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { LanguageProvider } from "@site/src/contexts/CodeLanguageContext";
import { ThemeProvider } from "@site/src/contexts/ThemeContext";

// Component to inject JSON-LD structured data for SEO
function StructuredData() {
	const { siteConfig } = useDocusaurusContext();

	// Organization schema
	const organizationSchema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "Verifik",
		url: siteConfig.url,
		logo: "https://cdn.verifik.co/LogoNegroSolo.svg",
		description:
			"Verifik offers no-code identity verification solutions with KYC/KYB, biometric authentication, facial recognition, and database screening.",
		sameAs: ["https://github.com/Open-Verifik/verifik-documentation"],
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

	return (
		<>
			<script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
			<script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
		</>
	);
}

// Wrapper component to provide contexts to all pages
export default function Root({ children }) {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<StructuredData />
				{children}
			</LanguageProvider>
		</ThemeProvider>
	);
}
