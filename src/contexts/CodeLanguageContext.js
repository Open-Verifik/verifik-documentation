import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};

export const LanguageProvider = ({ children }) => {
	const [selectedLanguage, setSelectedLanguage] = useState("curl");
	const [isInitialized, setIsInitialized] = useState(false);

	// Load saved preference from localStorage on mount
	useEffect(() => {
		const savedLanguage = localStorage.getItem("preferred-language");
		if (savedLanguage) {
			setSelectedLanguage(savedLanguage);
		}
		setIsInitialized(true);
	}, []);

	// Save preference to localStorage when it changes
	const updateLanguage = (language) => {
		setSelectedLanguage(language);
		localStorage.setItem("preferred-language", language);
	};

	const value = {
		selectedLanguage,
		updateLanguage,
		isInitialized,
	};

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
