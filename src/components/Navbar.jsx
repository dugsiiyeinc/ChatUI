import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useDarkMode } from '../context/DarkModeContext'; // Ensure this path is correct
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const { user } = useAuth();
  const username = user?.user_metadata?.username || user?.email;

  return (
    <nav className="bg-gray-900 dark:bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      {/* Left section: Navigation links */}
      <div className="flex items-center gap-6 text-orange-400 font-semibold">
        <span className="font-bold text-lg">Dugsiiye Bot</span>
        <a href="#">Home</a>
        <a href="#">History</a>
        <a href="#">Bot</a>
        <a href="#">Dugsiiye Bot</a>
        <a href="#">Testimonial</a>
        <a href="#">Settings</a>
      </div>

      {/* Right section: Welcome message and dark mode toggle */}
      <div className="flex items-center gap-4">
        {user && (
          <span className="text-sm">
            Welcome, <span className="text-orange-300">{username}</span>
          </span>
        )}

        {/* Star toggle button (filled for dark mode, outlined for light mode) */}
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
