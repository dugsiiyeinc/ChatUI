import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About Dugsiiye */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-amber-400">Dugsiiye</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Dugsiiye Bot is a modern chatbot interface built with React and TailwindCSS.
            It’s designed to be fast, responsive, and user-friendly
          </p>
        </div>

        {/* Navigation Pages */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-amber-400">Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-amber-400 font-semibold hover:text-white">Home</Link></li>
            <li><Link to="/history" className="text-amber-400 font-semibold hover:text-white">History</Link></li>
            <li><Link to="/bot" className="text-amber-400 font-semibold hover:text-white">Bot</Link></li>
            <li><Link to="/chatpage" className="text-amber-400 font-semibold hover:text-white">Chatpage</Link></li>
            <li><Link to="/users" className="text-amber-400 font-semibold hover:text-white">Users</Link></li>
            <li><Link to="/settings" className="text-amber-400 font-semibold hover:text-white">Settings</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-amber-400">Contact</h2>
          <p className="text-sm text-gray-300">Email: <a href="mailto:Dugsiiye@gmail.com" className="underline">Dugsiiye@gmail.com</a></p>
          <p className="text-sm text-gray-300">Phone: +252 61 9132246</p>
          <p className="text-sm text-gray-300">Location: Mogadishu, Somalia</p>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Dugsiiye. All rights reserved.
      </div>
    </footer>
  );
}
