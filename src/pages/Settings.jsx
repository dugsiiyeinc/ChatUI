import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  const { currentTheme, setTheme } = useTheme();
  const [profileImg, setProfileImg] = useState(null);
  const [role, setRole] = useState('Student');

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/signin');
    } else if (user?.role) {
      setRole(user.role);
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
        localStorage.removeItem('loggedInUser');
        alert('You have been logged out.');
        navigate('/signin');
      }
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setProfileImg(imgUrl);
      localStorage.setItem('userProfileImg', imgUrl);
    }
  };

  useEffect(() => {
    const savedImg = localStorage.getItem('userProfileImg');
    if (savedImg) {
      setProfileImg(savedImg);
    }
  }, []);

  const username = user?.username || user?.user_metadata?.username || 'Unknown';
  const email = user?.email;
  const avatar = user?.avatar || user?.user_metadata?.avatar;

  return (
    <div className="min-h-screen px-6 py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Settings Form */}
        <div className="md:col-span-2 bg-gray-800 dark:bg-white rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-400 dark:text-black">
            ⚙️ User Settings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Theme Toggle */}
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

            {/* Theme Dropdown */}
            {/* <div>
              <label className="block text-sm font-medium mb-2">🌗 Theme</label>
              <select
                value={selectedTheme}
                onChange={handleThemeChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 dark:text-black dark:bg-gray-100"
              >
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div> */}

            {/* Language */}
            <div>
              <label className="block text-sm font-medium mb-2">🌍 Language</label>
              <select className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 dark:text-black dark:bg-gray-100">
                <option>Somali</option>
                
              </select>
            </div>

            {/* Notifications */}
            {/* <div>
              <label className="block text-sm font-medium mb-2">🔔 Notifications</label>
              <select className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 dark:text-black dark:bg-gray-100">
                <option>On</option>
                <option>Off</option>
              </select>
            </div> */}

            {/* Role (admin only) */}
            {user?.role === 'admin' && (
              <div>
                <label className="block text-sm font-medium mb-2">👤 Change User Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 dark:text-black dark:bg-gray-100"
                >
                  <option>Student</option>
                  <option>Admin</option>
                </select>
              </div>
            )}
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

        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-400">
            <img
              src={profileImg || avatar || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-4 text-sm text-gray-500 dark:text-gray-300"
          />

          <div className="text-center space-y-1">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{username}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{email}</p>
            <p className="text-sm bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-blue-300 px-3 py-1 rounded-full mt-2">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
