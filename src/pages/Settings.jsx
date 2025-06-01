import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';

export default function Settings({ setTheme, currentTheme }) {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/signin');
    }
  }, [user, isLoading, navigate]);

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

  const selectedTheme =
    (currentTheme || 'light').charAt(0).toUpperCase() +
    (currentTheme || 'light').slice(1);

  const username = user?.user_metadata?.username || user?.email;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
          ⚙️ User Settings
        </h2>

        {user && (
          <div className="text-center text-gray-300 mb-10">
            Logged in as: <span className="font-semibold">{username}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium mb-2">🌗 Theme</label>
            <select
              value={selectedTheme}
              onChange={handleThemeChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
            >
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">🌍 Language</label>
            <select className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500">
              <option>Somali</option>
              <option>English</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">🔔 Notifications</label>
            <select className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500">
              <option>On</option>
              <option>Off</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">👤 Account Type</label>
            <select className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500">
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
