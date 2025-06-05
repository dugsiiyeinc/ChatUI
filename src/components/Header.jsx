import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { currentTheme, setTheme } = useTheme();
  const username = user?.user_metadata?.username || user?.email;

  const handleDugsiiyeBotClick = () => {
    navigate(user ? "/chatpage" : "/signin");
  };

  return (
    <nav className="bg-gray-900 dark:bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="text-amber-400 font-extrabold text-lg">Dugsiiye Bot</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center gap-6 text-amber-400 font-semibold">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/history" className="hover:text-white">History</Link>
          <Link to="/bot" className="hover:text-white">Bot</Link>
          <button onClick={handleDugsiiyeBotClick} className="hover:text-white">Dugsiiye Bot</button>
          <Link to="/users" className="hover:text-white">Testmonial</Link>
          <Link to="/settings" className="hover:text-white">Settings</Link>
        </div>

        {/* Right: Toggle + Hamburger */}
        <div className="flex items-center gap-4 ml-auto">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={currentTheme === "dark"}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-400 peer-checked:bg-white rounded-full transition duration-300"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-black rounded-full transition-all duration-300 peer-checked:translate-x-5 peer-checked:bg-gray-900"></div>
          </label>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-amber-400 text-xl md:hidden"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 text-amber-400 font-semibold bg-gray-900 dark:bg-gray-800">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-white">Home</Link>
          <Link to="/history" onClick={() => setIsMenuOpen(false)} className="hover:text-white">History</Link>
          <Link to="/bot" onClick={() => setIsMenuOpen(false)} className="hover:text-white">Bot</Link>
          <button onClick={() => { handleDugsiiyeBotClick(); setIsMenuOpen(false); }} className="hover:text-white">Dugsiiye Bot</button>
          <Link to="/users" onClick={() => setIsMenuOpen(false)} className="hover:text-white">Testmonial</Link>
          <Link to="/settings" onClick={() => setIsMenuOpen(false)} className="hover:text-white">Settings</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
