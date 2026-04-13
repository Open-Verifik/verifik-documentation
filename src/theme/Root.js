import React from "react";
import Head from "@docusaurus/Head";
import { useLocation } from "@docusaurus/router";
import { LanguageProvider } from "@site/src/contexts/CodeLanguageContext";

/**
 * Wraps the app with {@link LanguageProvider} so MDX components such as
 * `CodeExamples` can call `useLanguage` during SSG.
 *
 * Default `robots` / `googlebot` tags were removed from `headTags` so unlisted
 * LSE pages are not followed by a conflicting `index, follow` meta.
 */
export default function Root({ children }) {
	const { pathname } = useLocation();
	const isLseIntegrationGuide = pathname.includes(
		"london-stock-exchange-integration",
	);

	return (
		<LanguageProvider>
			{!isLseIntegrationGuide ? (
				<Head>
					<meta name="robots" content="index, follow" />
					<meta name="googlebot" content="index, follow" />
				</Head>
			) : null}
			{children}
		</LanguageProvider>
	);
}
