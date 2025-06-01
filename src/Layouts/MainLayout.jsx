import { Outlet, Link } from "react-router-dom";
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Layout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 dark:bg-black">
      {/* Phone Frame Container */}
      <div className="relative w-[390px] h-[844px] bg-[url('/frame.png')] bg-no-repeat bg-center bg-contain shadow-2xl">
        {/* Screen Content Area inside the frame */}
        <div className="absolute top-[50px] left-[18px] right-[18px] bottom-[50px] rounded-xl overflow-auto bg-white dark:bg-gray-900 text-black dark:text-white">

          {/* Optional: Navbar Sidebar */}
          <nav className="bg-gray-800 p-4 flex flex-col space-y-3 items-center text-sm text-white">
            <Link to="/" className="text-amber-400 font-semibold hover:text-white">Home</Link>
            <Link to="/history" className="text-amber-400 font-semibold hover:text-white">History</Link>
            <Link to="/bot" className="text-amber-400 font-semibold hover:text-white">Bot</Link>
            <Link to="/chatpage" className="text-amber-400 font-semibold hover:text-white">Chatpage</Link>
            <Link to="/users" className="text-amber-400 font-semibold hover:text-white">Users</Link>
            <Link to="/settings" className="text-amber-400 font-semibold hover:text-white">Settings</Link>

            <div className="flex flex-col space-y-2 w-full items-center pt-2">
              <Link to="/signin" className="w-full text-center px-4 py-2 rounded-md bg-amber-400 text-white hover:bg-amber-500">Sign In</Link>
              <Link to="/signup" className="w-full text-center px-4 py-2 rounded-md border text-orange-600 bg-white border-orange-600 hover:bg-orange-50">Sign Up</Link>
            </div>
          </nav>

          {/* Main Content Area */}
          <main className="p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
