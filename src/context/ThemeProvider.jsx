import { useEffect, useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", isDarkMode);
    }, [isDarkMode]);

    const toggleDarkMode = useCallback(() => {
        setIsDarkMode((prev) => (prev === "dark" ? "light" : "dark"));
    }, []);

    const contextValue = useMemo(
        () => ({
            isDarkMode: isDarkMode === "dark",
            toggleDarkMode,
        }),
        [isDarkMode, toggleDarkMode]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

//PropTypes validation
ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
