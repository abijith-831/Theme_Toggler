import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

//use context for storing theme globally 
import { ThemeProvider } from './ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
