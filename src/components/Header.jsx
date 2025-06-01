import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
   const [darkMode, setDarkMode] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDugsiiyeBotClick = () => {
    if (user) {
      navigate("/chatpage");
    } else {
      navigate("/signin");
    }
  };

  const username = user?.user_metadata?.username || user?.email;

  return (
    <nav className="bg-gray-800 shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center space-x-6 lg:space-x-8">
            <Link to="/" className="text-amber-400 font-extrabold hover:text-white">Dugsiiye Bot</Link>
            <Link to="/" className="text-amber-400 font-semibold hover:text-white">Home</Link>
            <Link to="/history" className="text-amber-400 font-semibold hover:text-white">History</Link>
            <Link to="/bot" className="text-amber-400 font-semibold hover:text-white">Bot</Link>
            <button
              onClick={handleDugsiiyeBotClick}
              className="text-amber-400 font-semibold hover:text-white"
            >
              Dugsiiye Bot
            </button>
            <Link to="/users" className="text-amber-400 font-semibold hover:text-white">Testmonial</Link>
            <Link to="/settings" className="text-amber-400 font-semibold hover:text-white">Settings</Link>
          </div>

          {user && (
            <div className="text-sm text-gray-300 ml-6">
              Welcome, {username}
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            <Link to="/" className="text-amber-400 font-extrabold hover:text-white py-2">Dugsiiye Bot</Link>
            <Link to="/" className="text-amber-400 font-semibold hover:text-white py-2">Home</Link>
            <Link to="/history" className="text-amber-400 font-semibold hover:text-white py-2">History</Link>
            <Link to="/bot" className="text-amber-400 font-semibold hover:text-white py-2">Bot</Link>
            <button
              onClick={handleDugsiiyeBotClick}
              className="text-left text-amber-400 font-semibold hover:text-white py-2"
            >
              Dugsiiye Bot
            </button>
            <Link to="/users" className="text-amber-400 font-semibold hover:text-white py-2">Testmonial</Link>
            <Link to="/settings" className="text-amber-400 font-semibold hover:text-white py-2">Settings</Link>
             <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1 rounded hover:bg-gray-700"
            title="Toggle Theme"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
            {user && (
              <div className="text-sm text-gray-300 mt-2">
                Welcome, {username}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
