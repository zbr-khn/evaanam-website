import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  theme: "light",
  isDark: false,
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    // Check localStorage
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("evaanam-theme");
      if (stored === "dark" || stored === "light") {
        return stored;
      }
      // Check system preference
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    return "light";
  });

  const isDark = theme === "dark";

  useEffect(() => {
    const root = document.documentElement;
    // Clean up any inline background color styles so CSS variables and classes take full immediate effect
    if (document.body) {
      document.body.style.removeProperty("background-color");
    }
    root.style.removeProperty("background-color");

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("evaanam-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("evaanam-theme", "light");
    }
  }, [isDark]);

  // Listen to system preference changes if no manual preference set
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      const stored = localStorage.getItem("evaanam-theme");
      if (!stored) {
        setThemeState(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const setTheme = (newTheme) => {
    if (newTheme === "dark" || newTheme === "light") {
      setThemeState(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
