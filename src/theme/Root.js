import React from "react";
import { LanguageProvider } from "@site/src/contexts/CodeLanguageContext";
import { ThemeProvider } from "@site/src/contexts/ThemeContext";

// Wrapper component to provide contexts to all pages
export default function Root({ children }) {
	return (
		<ThemeProvider>
			<LanguageProvider>{children}</LanguageProvider>
		</ThemeProvider>
	);
}
