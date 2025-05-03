import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-16 mt-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* ChatUI Info */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-amber-400">ChatUI</h2>
            <p className="text-sm text-gray-300">
              ChatUI is a modern chatbot interface built with React and TailwindCSS. 
              It’s designed to be fast, responsive, and user-friendly.
            </p>
          </div>
  
          {/* Pages */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-amber-400">Pages</h2>
            <ul className="space-y-8  space-x-8  text-sm ">
            <Link to="/" className="text-amber-400 font-semibold hover:text-white py-2">Home</Link>
              <Link to="/history" className="text-amber-400 font-semibold hover:text-white py-2">History</Link>
              <Link to="/bot" className="text-amber-400 font-semibold hover:text-white py-2">Bot</Link>
              <Link to="/chatpage" className="text-amber-400 font-semibold hover:text-white py-2">Chatpage</Link>
              <Link to="/users" className="text-amber-400 font-semibold hover:text-white py-2">Users</Link>
              <Link to="/settings" className="text-amber-400 font-semibold hover:text-white py-2">Settings</Link>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-amber-400">Contact</h2>
            <p className="text-sm text-gray-300">Email: istarmohamd504@gmail.com</p>
            <p className="text-sm text-gray-300">Phone: +252 61 9132246</p>
            <p className="text-sm text-gray-300">Location: Mogadishu, Somalia</p>
          </div>
        </div>
  
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ChatUI. All rights reserved. .....
        </div>
      </footer>
    );
  }
  