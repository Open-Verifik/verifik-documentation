import { useLanguage } from "@site/src/contexts/CodeLanguageContext";

export const useLanguagePreference = () => {
	const { selectedLanguage, updateLanguage, isInitialized } = useLanguage();

	return {
		selectedLanguage,
		updateLanguage,
		isInitialized,
		// Helper function to check if a specific language is selected
		isLanguageSelected: (language) => selectedLanguage === language,
		// Helper function to get language display info
		getLanguageInfo: (language) => {
			const languages = {
				curl: { label: "cURL", icon: "🌐" },
				node: { label: "Node.js", icon: "🟢" },
				python: { label: "Python", icon: "🐍" },
				java: { label: "Java", icon: "☕" },
				csharp: { label: "C#", icon: "🔷" },
			};
			return languages[language] || { label: language, icon: "📝" };
		},
	};
};
