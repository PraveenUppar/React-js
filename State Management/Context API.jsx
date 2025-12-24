import { createContext, useContext, useState } from "react";

// Create context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use context
function useTheme() {
  return useContext(ThemeContext);
}

// Component using context
function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{ background: theme === "light" ? "white" : "black" }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current theme: {theme}</p>
    </header>
  );
}

// In App component:
function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}
