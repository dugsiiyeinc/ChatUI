import { Link } from "react-router-dom";
import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className="bg-gray-800 shadow-md py-4">
      <div className="max-w-6xl mx-auto px-6 ml-80">
       

        <div className="flex justify-center items-center space-x-10">
       

          <Link to="/" className="text-amber-400 font-semibold hover:text-white">Home</Link>
          <Link to="/chat" className="text-amber-400 font-semibold hover:text-white">Chat</Link>
          <Link to="/history" className="text-amber-400 font-semibold hover:text-white">History</Link>
          <Link to="/bot" className="text-amber-400 font-semibold hover:text-white">Bot</Link>
          <Link to="/users" className="text-amber-400 font-semibold hover:text-white">Users</Link>
          <Link to="/settings" className="text-amber-400 font-semibold hover:text-white">Settings</Link>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Header
