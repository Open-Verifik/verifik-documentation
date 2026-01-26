import React from "react";

/**
 * Component to inject JSON-LD structured data for service pages
 * @param {Object} props
 * @param {string} props.name - Service name
 * @param {string} props.description - Service description
 * @param {string[]} props.areaServed - ISO country codes where service is available
 * @param {string} props.serviceType - Type of service
 * @param {string} props.category - Service category
 */
export default function ServiceStructuredData({ name, description, areaServed, serviceType, category }) {
	const schema = {
		"@context": "https://schema.org",
		"@type": "Service",
		name,
		description,
		provider: {
			"@type": "Organization",
			name: "Verifik",
			url: "https://verifik.co",
		},
		areaServed,
		serviceType,
		category,
	};

	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
