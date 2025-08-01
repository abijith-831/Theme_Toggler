import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import { useTheme } from './ThemeContext'; // <-- import context

function App() {
  const { theme } = useTheme(); // use context directly

  useEffect(() => {
    const existingLink = document.getElementById('theme-css') as HTMLLinkElement;
    if (existingLink) {
      existingLink.href = `/styles/${theme}-theme.css`;
    } else {
      const link = document.createElement('link');
      link.id = 'theme-css';
      link.rel = 'stylesheet';
      link.href = `/styles/${theme}-theme.css`;
      document.head.appendChild(link);
    }
  }, [theme]); 

  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
