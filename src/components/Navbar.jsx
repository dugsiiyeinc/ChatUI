import React, { useEffect } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useDarkMode } from '../context/DarkModeContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const { user } = useAuth();
  const username = user?.user_metadata?.username || user?.email;

  // Apply theme class to <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className="bg-gray-900 dark:bg-gray-100 text-white dark:text-black px-6 py-4 flex justify-between items-center transition-colors duration-300">
      {/* Left section: Navigation */}
      <div className="flex items-center gap-6 text-orange-400 font-semibold">
        <span className="font-bold text-lg">Dugsiiye Bot</span>
        <a href="#">Home</a>
        <a href="#">History</a>
        <a href="#">Bot</a>
        <a href="#">Dugsiiye Bot</a>
        <a href="#">Testimonial</a>
        <a href="#">Settings</a>
      </div>

      {/* Right section: Welcome + Toggle */}
      <div className="flex items-center gap-4">
        {user && (
          <span className="text-sm">
            Welcome, <span className="text-orange-300">{username}</span>
          </span>
        )}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className="text-yellow-400 text-2xl hover:rotate-12 transition-transform duration-300"
        >
          {isDarkMode ? <FaStar /> : <FaRegStar />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
