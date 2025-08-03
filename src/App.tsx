import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import { useTheme } from './ThemeContext'; 

function App() {
  const { theme } = useTheme(); 

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

    document.body.classList.remove('light-theme', 'dark-theme', 'blue-theme');
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 -z-10 h-full w-full"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
            radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
            radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
          `,
        }}
      />

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
