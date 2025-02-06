import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './context/themeContext';

const App: React.FC = ()=> {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("useContext must be used within a ThemeProvider");
  }

  const { theme, setTheme } = themeContext;

  const handleTheme = (): void => {
    if (theme === "Light") {
      setTheme("Dark");
    }
    else {
      setTheme("Light");
    }
  }

  return (
    <div className={theme === "Light" ? "light-theme" : "dark-theme"}>
      <h1>Hi, I am a TypeScript React App</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={handleTheme}>Change theme</button>
    </div>
  );
}

export default App;
