import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("forest");
    useEffect(() => {
        let storedTheme = localStorage.getItem('theme');
        if (!storedTheme && storedTheme === "cupcake" || storedTheme === "forest") {
            storedTheme = window.matchMedia("(prefers-color-scheme:dark)").matches
                ? "forest"
                : "cupcake";
        }
        setTheme(storedTheme);
    }, [])
    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme])
    const toggleTheme = () => {
        setTheme(preTheme => {
            const currentTheme = preTheme === "forest" ? "cupcake" : "forest";
            localStorage.setItem("theme", currentTheme);
            return currentTheme;
        })
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;