import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Sun, Moon, Palette } from 'lucide-react';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);


  //========== stored needed datas in an array and calling it using map in dropdown theme ===========
  const options = [
    { label: "Light", value: "light", icon: <Sun size={16} className="mr-2 " /> },
    { label: "Dark", value: "dark", icon: <Moon size={16} className="mr-2" /> },
    { label: "Blue", value: "blue", icon: <Palette size={16} className="mr-2 " /> }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as 'light' | 'dark' | 'blue');
  };

  
  return (
<nav className="sticky top-0 z-50 w-full px-4 md:px-10 py-6 shadow-xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-white/20">

      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* ========Logo ==============*/}
        <Link to="/" className="flex items-center">
          <img src="/logo/logo.svg" alt="Logo" className="h-10" />
        </Link>

        {/*========== Desktop Navbar============ */}
        <div className="hidden md:flex items-center space-x-6 font-bold">
          <Link to="/" className="px-6 py-2  rounded-full transition hover:bg-black hover:text-white">Home</Link>
          <Link to="/about" className="px-6 py-2 rounded-full transition hover:bg-black hover:text-white">About</Link>
          <Link to="/contact" className="px-6 py-2 rounded-full transition hover:bg-black hover:text-white">Contact</Link>

          <div className="flex items-center space-x-2 border border-gray-300 px-6 py-1.5 rounded-full">
            {options.find(opt => opt.value === theme)?.icon}
            <select className="bg-transparent text-sm focus:outline-none" value={theme} onChange={handleChange}>
              {options.map(({ label, value }) => (
                <option key={value} value={value} className="text-black p-6">{label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* =============Mobile Menu Toggle============= */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ==============Mobile Dropdown Menu ==============*/}
      {menuOpen && (
        <div className="md:hidden mx-20 mt-4 flex flex-col space-y-3 font-bold px-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="px-6 py-2 rounded-full  text-black bg-gray-100 hover:bg-black hover:border hover:border-gray-300 hover:text-white  transition duration-500">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="px-6 py-2 rounded-full text-black bg-gray-100 hover:bg-black  hover:border hover:border-gray-300 hover:text-white  transition duration-500">About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="px-6 py-2 rounded-full text-black bg-gray-100 hover:bg-black  hover:border hover:border-gray-300 hover:text-white  transition duration-500">Contact</Link>
          <div className="relative">
            <div className="flex items-center space-x-2 border border-gray-300 px-4 py-2.5 rounded-full bg-black">
              {options.find(opt => opt.value === theme)?.icon}
              <div className="relative flex-1">
                <select  className=" text-sm focus:outline-none appearance-none w-full pr-6 cursor-pointer "  value={theme}  onChange={handleChange}  >
                  {options.map(({ label, value }) => (
                    <option key={value} value={value} className="text-black bg-white">
                      {label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
              </div>
            </div>
          </div>
        
        </div>
      )}
    </nav>
  );
};

export default Navbar;
