import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row text-sm md:text-base lg:text-lg ">

      {/* Sidebar / Navbar */}
      <nav className="bg-gray-800 w-full md:w-2/4 text-white">
        <div className="p-5 flex flex-col space-y-6 items-center md:items-start">

          <Link to="/" className="text-amber-400 font-semibold hover:text-white">Home</Link>
          <Link to="/history" className="text-amber-400 font-semibold hover:text-white">History</Link>
          <Link to="/bot" className="text-amber-400 font-semibold hover:text-white">Bot</Link>
          <Link to="/chatpage" className="text-amber-400 font-semibold hover:text-white">Chatpage</Link>
          <Link to="/users" className="text-amber-400 font-semibold hover:text-white">Users</Link>
          <Link to="/settings" className="text-amber-400 font-semibold hover:text-white">Settings</Link>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
            <Link to="/signin" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              Sign In
            </Link>
            <Link to="/signup" className="inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md text-orange-600 bg-white border-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-y-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
