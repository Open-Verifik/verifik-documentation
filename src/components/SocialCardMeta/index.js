import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";

/**
 * Component to inject language-specific Open Graph images for social sharing
 * Determines language based on URL path: /docs-es/ = Spanish, otherwise English
 */
export default function SocialCardMeta() {
	const { siteConfig } = useDocusaurusContext();
	const location = useLocation();

	// Simple detection: if path starts with /docs-es, it's Spanish, otherwise English
	const isSpanish = location.pathname.startsWith("/docs-es");
	const socialCardImage = isSpanish
		? `${siteConfig.url}img/verifik-social-card-es.jpg`
		: `${siteConfig.url}img/verifik-social-card-en.jpg`;

	return (
		<>
			<meta property="og:image" content={socialCardImage} />
			<meta property="og:image:url" content={socialCardImage} />
			<meta property="og:image:secure_url" content={socialCardImage} />
			<meta property="og:image:type" content="image/jpeg" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:image:alt" content={isSpanish ? "Verifik - Soluciones de Verificación de Identidad" : "Verifik - Identity Verification Solutions"} />
			
			{/* Twitter Card */}
			<meta name="twitter:image" content={socialCardImage} />
			<meta name="twitter:image:alt" content={isSpanish ? "Verifik - Soluciones de Verificación de Identidad" : "Verifik - Identity Verification Solutions"} />
		</>
	);
}

