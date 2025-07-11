import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx'; // Importez le contexte depuis son fichier .jsx

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme doit être utilisé à l\'intérieur d\'un ThemeProvider');
  }
  return context;
};

export default useTheme;
