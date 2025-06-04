// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* Line kala soocaysa sections-ka iyo footer-ka */}
      <div className="w-full border-t border-gray-700 mt-20 mb-0"></div>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Description */}
          <div>
            <h2 className="text-amber-400 font-bold text-xl mb-2">Dugsiiye</h2>
            <p className="text-gray-300 text-sm">
              Dugsiiye Bot is a modern chatbot interface built with React and TailwindCSS.
              It’s designed to be fast, responsive, and user-friendly.
            </p>
          </div>

          {/* Center: Page links */}
          <div>
            <h2 className="text-amber-400 font-bold text-xl mb-2">Pages</h2>
            <ul className="text-gray-300 text-sm space-y-1">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/history">History</Link></li>
              <li><Link to="/bot">Bot</Link></li>
              <li><Link to="/chatpage">Chatpage</Link></li>
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/settings">Settings</Link></li>
            </ul>
          </div>

          {/* Right: Contact info */}
          <div>
            <h2 className="text-amber-400 font-bold text-xl mb-2">Contact</h2>
            <p className="text-gray-300 text-sm">
              Email: <a href="mailto:Dugsiiye@gmail.com" className="underline">Dugsiiye@gmail.com</a><br />
              Phone: +252 61 9132246<br />
              Location: Mogadishu, Somalia
            </p>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-8">
          © 2025 Dugsiiye. All rights reserved.
        </div>
      </footer>
    </>
  );
}
