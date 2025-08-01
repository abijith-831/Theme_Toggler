import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as 'light' | 'dark' | 'blue');
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow">
      <div className="text-xl font-bold text-blue-600">
        <Link to="/">MyLogo</Link>
      </div>

      <div className="flex items-center space-x-6 text-gray-800 text-base font-medium">
        <Link to="/" className="hover:text-blue-500 transition">Home</Link>
        <Link to="/about" className="hover:text-blue-500 transition">About</Link>

        <select
          className="px-3 py-1.5 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black"
          value={theme}
          onChange={handleChange}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="blue">Blue</option>
        </select>

        <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
