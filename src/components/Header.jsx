import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const username = user?.user_metadata?.username || user?.email;

  const handleDugsiiyeBotClick = () => {
    if (user) {
      navigate("/chatpage");
    } else {
      navigate("/signin");
    }
  };

  // Handle dark mode toggle
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

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

        {/* Right: Dark Mode + User + Hamburger */}
        <div className="flex items-center gap-3 ml-auto">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-amber-400 text-xl"
            title="Toggle Theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          {user && (
            <span className="text-sm text-gray-300 whitespace-nowrap hidden sm:inline">
              Welcome, {username}
            </span>
          )}

          {/* Hamburger (visible on mobile) */}
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
          <Link to="/" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/history" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>History</Link>
          <Link to="/bot" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>Bot</Link>
          <button onClick={() => { handleDugsiiyeBotClick(); setIsMenuOpen(false); }} className="hover:text-white">Dugsiiye Bot</button>
          <Link to="/users" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>Testmonial</Link>
          <Link to="/settings" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>Settings</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
