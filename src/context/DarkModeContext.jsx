import { createContext, useContext, useState } from "react";

// 1. membuat context
const DarkModeContext = createContext();

// 2. membuat provider
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// 3. membuat custom hook
export const useDarkMode = () => useContext(DarkModeContext);
