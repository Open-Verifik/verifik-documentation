import React from "react";
import { useTheme } from "@site/src/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
	const { isDarkMode, toggleTheme, isInitialized } = useTheme();

	if (!isInitialized) {
		return null;
	}

	return (
		<button
			onClick={toggleTheme}
			className="theme-toggle"
			aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
			title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
		>
			{isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
		</button>
	);
};

export default ThemeToggle;
