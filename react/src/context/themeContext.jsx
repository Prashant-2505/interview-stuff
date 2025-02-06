import React, { createContext, useState, useEffect } from "react";

// Create a Context
const ThemeContext = createContext();

// Create a Provider Component
export const ThemeProvider = ({ children }) => {
  const prevTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(prevTheme ? JSON.parse(prevTheme) : "light");

  // Update localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
