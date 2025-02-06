import { createContext, useState, ReactNode } from "react";

// Define the context type
interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

// Create context with default values
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme Provider Component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("Light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
