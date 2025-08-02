import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as 'light' | 'dark' | 'blue');
  };

  return (
    <nav className="navbar flex items-center justify-between mx-48   my-4 rounded-full  px-24 py-8  shadow-2xl"  >
      <div className="text-xl font-bold ">
      <Link to="/">
        <img src="/logo/logo.svg" alt="MyLogo" className="h-10 w-auto" />
        </Link>
      </div>

      <div className="flex items-center space-x-10 text-base font-bold ">
            <Link to="/" className="px-6 py-2 rounded-full transition hover:bg-black hover:text-white">Home</Link>
            <Link to="/about" className="px-6 py-2 rounded-full transition hover:bg-black hover:text-white">About</Link>
            <Link to="/contact" className="px-6 py-2 rounded-full transition hover:bg-black hover:text-white">Contact</Link>


            <select className="dropdown px-10 py-1.5 rounded-full border border-gray-300  text-sm focus:outline-none focus:ring-2 focus:ring-black" value={theme} onChange={handleChange} >
                <option className='text-black' value="light">Light</option>
                <option className='text-black' value="dark">Dark</option>
                <option className='text-black' value="blue">Blue</option>
            </select>

      </div>
    </nav>
  );
};

export default Navbar;
