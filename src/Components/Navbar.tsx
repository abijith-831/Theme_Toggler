import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as 'light' | 'dark' | 'blue');
  };

  return (
    <nav className=" flex items-center justify-between mx-8 my-4 rounded-full px-24 py-8 bg-gray-100 shadow">
      <div className="text-xl font-bold ">
        <Link to="/">MyLogo</Link>
      </div>

      <div className="flex items-center space-x-10 text-gray-800 text-base font-bold ">
            <Link to="/" className="px-6 py-2 rounded-full transition hover:bg-black hover:text-white">Home</Link>
            <Link to="/about" className="px-6 py-2 rounded-full transition hover:bg-black hover:text-white">About</Link>
            <Link to="/contact" className="px-6 py-2 rounded-full transition hover:bg-black hover:text-white">Contact</Link>


            <select className="px-3 py-1.5 rounded-full border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black" value={theme} onChange={handleChange} >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="blue">Blue</option>
            </select>

      </div>
    </nav>
  );
};

export default Navbar;
