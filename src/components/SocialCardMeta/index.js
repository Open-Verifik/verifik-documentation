import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

/**
 * Component to inject Open Graph images for social sharing
 * Uses English social card for all pages (simplified)
 */
export default function SocialCardMeta() {
	const { siteConfig } = useDocusaurusContext();

	// Always use English social card (simplified approach)
	const socialCardImage = `${siteConfig.url}img/verifik-social-card-en.jpg`;

	return (
		<>
			<meta property="og:image" content={socialCardImage} />
			<meta property="og:image:url" content={socialCardImage} />
			<meta property="og:image:secure_url" content={socialCardImage} />
			<meta property="og:image:type" content="image/jpeg" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:image:alt" content="Verifik - Identity Verification Solutions" />

			{/* Twitter Card */}
			<meta name="twitter:image" content={socialCardImage} />
			<meta name="twitter:image:alt" content="Verifik - Identity Verification Solutions" />
		</>
	);
}
