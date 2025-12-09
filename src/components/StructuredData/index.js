import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

/**
 * Component to inject JSON-LD structured data for SEO
 * This helps search engines understand the content better
 */
export default function StructuredData({ type = "Organization", additionalData = {} }) {
	const { siteConfig } = useDocusaurusContext();

	// Base Organization schema
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
			// Add other social media profiles here
		],
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "Customer Service",
			url: siteConfig.url,
		},
		...additionalData,
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

	// SoftwareApplication schema for API documentation
	const softwareApplicationSchema = {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: "Verifik API",
		applicationCategory: "DeveloperApplication",
		operatingSystem: "Any",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
		description:
			"API for identity verification, KYC/KYB, biometric authentication, and database screening services.",
	};

	return (
		<>
			<script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
			<script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
			<script type="application/ld+json">{JSON.stringify(softwareApplicationSchema)}</script>
		</>
	);
}

