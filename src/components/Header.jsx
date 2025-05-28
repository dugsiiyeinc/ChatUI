import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { useAuth } from "../context/AuthContext"; // ✅ make sure context exists

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth(); // ✅ get current user
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ✅ Protected Dugsiiye Bot link handler
  const handleDugsiiyeBotClick = () => {
    if (user) {
      navigate("/chatpage");
    } else {
      navigate("/signin");
    }
  };

  return (
    <div>
      <nav className="bg-gray-800 shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile Header */}
          <div className="flex justify-between items-center md:hidden">
            <Link to="/" className="text-amber-400 font-extrabold hover:text-white">Dugsiiye Bot</Link>
            <button 
              onClick={toggleMenu}
              className="text-amber-400 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex justify-center items-center">
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
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
