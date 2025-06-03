import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  const { currentTheme, setTheme } = useTheme();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/signin');
    }
  }, [user, isLoading, navigate]);

  const selectedTheme =
    (currentTheme || 'light').charAt(0).toUpperCase() +
    (currentTheme || 'light').slice(1);

  const handleThemeChange = (e) => {
    setTheme(e.target.value.toLowerCase());
  };

  const handleLogout = async () => {
    if (window.confirm('Do you want to log out?')) {
      const { error } = await supabase.auth.signOut({ scope: 'local' });
      if (error) {
        alert('Logout failed: ' + error.message);
      } else {
        alert('You have been logged out.');
        navigate('/signin');
      }
    }
  };

  const username = user?.user_metadata?.username || user?.email;

  return (
    <div className="min-h-screen px-6 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto bg-gray-800 dark:bg-white rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400 dark:text-black">
          ⚙️ User Settings
        </h2>

        {user && (
          <div className="text-center text-gray-300 dark:text-black mb-10">
            Logged in as: <span className="font-semibold">{username}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-between bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 dark:text-black dark:bg-gray-100">
            <label className="font-medium">🌙 Enable White Mode</label>
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
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">🌗 Theme</label>
            <select
              value={selectedTheme}
              onChange={handleThemeChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 dark:text-black dark:bg-gray-100"
            >
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">🌍 Language</label>
            <select className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 dark:text-black dark:bg-gray-100">
              <option>Somali</option>
              <option>English</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">🔔 Notifications</label>
            <select className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 dark:text-black dark:bg-gray-100">
              <option>On</option>
              <option>Off</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">👤 Account Type</label>
            <select className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 dark:text-black dark:bg-gray-100">
              <option>Student</option>
              <option>Admin</option>
            </select>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
          >
            <LogOut className="w-5 h-5" />
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
