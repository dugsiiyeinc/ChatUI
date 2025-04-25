import { Link } from "react-router-dom";
import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className="bg-gray-800 shadow-md py-4">
      <div className="max-w-6xl mx-auto px-6 ml-80">
       

        <div className="flex justify-center items-center space-x-10">
       

          <Link to="/" className="text-amber-400 font-semibold hover:text-white">Home</Link>
          
          <Link to="/history" className="text-amber-400 font-semibold hover:text-white">History</Link>
          <Link to="/bot" className="text-amber-400 font-semibold hover:text-white">Bot</Link>
          <Link to="/chatpage" className="text-amber-400 font-semibold hover:text-white">chatpage</Link>

          <Link to="/users" className="text-amber-400 font-semibold hover:text-white">Users</Link>
          <Link to="/settings" className="text-amber-400 font-semibold hover:text-white">Settings</Link>
          <div className='flex items-center space-x-4'>
                                    <Link to="/signin" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                                        Sign In
                                    </Link>
                                    <Link to="/signup" className="hidden sm:inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-orange-600 bg-white border-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                                        Sign Up
                                    </Link>
                                </div>


        </div>
      </div>
    </nav>
    </div>
  )
}

export default Header
