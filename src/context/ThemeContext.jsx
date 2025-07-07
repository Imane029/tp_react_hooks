import React, { useEffect, useCallback,  useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('app-theme', 'light');

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, [setTheme]);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const contextValue = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// IMPORTANT: useTheme n'est plus défini ni exporté ici.
// Il est maintenant dans src/hooks/useTheme.js

export { ThemeContext }; // Exportez ThemeContext pour qu'il puisse être importé par useTheme.js
export default ThemeProvider; // ThemeProvider reste l'export par défaut
