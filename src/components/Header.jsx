import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-gray-800 shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center md:hidden">
            <Link to="/" className="text-amber-400 font-semibold hover:text-white">ChatbotUI</Link>
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

          {/* Desktop Menu */}
          <div className="hidden md:flex md:justify-between items-center">
            <div className="flex items-center space-x-6 lg:space-x-8">
              <Link to="/" className="text-amber-400 font-semibold hover:text-white">Home</Link>
              <Link to="/history" className="text-amber-400 font-semibold hover:text-white">History</Link>
              <Link to="/bot" className="text-amber-400 font-semibold hover:text-white">Bot</Link>
              <Link to="/chatpage" className="text-amber-400 font-semibold hover:text-white">Chatpage</Link>
              <Link to="/users" className="text-amber-400 font-semibold hover:text-white">Users</Link>
              <Link to="/settings" className="text-amber-400 font-semibold hover:text-white">Settings</Link>
            </div>
            
            <div className='flex items-center space-x-4 md:ml-8 lg:ml-auto'>
              <Link to="/signin" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                Sign In
              </Link>
              <Link to="/signup" className="inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-orange-600 bg-white border-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                Sign Up
              </Link>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4">
              <Link to="/" className="text-amber-400 font-semibold hover:text-white py-2">Home</Link>
              <Link to="/history" className="text-amber-400 font-semibold hover:text-white py-2">History</Link>
              <Link to="/bot" className="text-amber-400 font-semibold hover:text-white py-2">Bot</Link>
              <Link to="/chatpage" className="text-amber-400 font-semibold hover:text-white py-2">Chatpage</Link>
              <Link to="/users" className="text-amber-400 font-semibold hover:text-white py-2">Users</Link>
              <Link to="/settings" className="text-amber-400 font-semibold hover:text-white py-2">Settings</Link>
              <div className='flex flex-col space-y-2 pt-2'>
                <Link to="/signin" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                  Sign In
                </Link>
                <Link to="/signup" className="inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-orange-600 bg-white border-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
