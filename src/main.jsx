import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ThemeProvider from './context/ThemeContext.jsx';
import './index.css'; // Importez le fichier CSS directement ici

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);