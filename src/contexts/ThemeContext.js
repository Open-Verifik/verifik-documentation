import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};

export const ThemeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isInitialized, setIsInitialized] = useState(false);

	// Load saved theme preference from localStorage on mount
	useEffect(() => {
		// Force light mode for now
		setIsDarkMode(false);
		setIsInitialized(true);
	}, []);

	// Apply theme to document and save preference
	useEffect(() => {
		if (isInitialized) {
			document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
			localStorage.setItem("preferred-theme", isDarkMode ? "dark" : "light");
		}
	}, [isDarkMode, isInitialized]);

	// Toggle theme
	const toggleTheme = () => {
		setIsDarkMode((prev) => !prev);
	};

	// Set specific theme
	const setTheme = (theme) => {
		setIsDarkMode(theme === "dark");
	};

	const value = {
		isDarkMode,
		toggleTheme,
		setTheme,
		isInitialized,
	};

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
