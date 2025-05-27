// Settings.jsx
export default function Settings({ setTheme, currentTheme }) {
  const handleThemeChange = (e) => {
    setTheme(e.target.value.toLowerCase());
  };

  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-10">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-700 dark:text-blue-300">⚙️ Dejinta Isticmaalaha</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Theme */}
          <div>
            <label className="block text-gray-800 dark:text-gray-100 font-semibold mb-2">Theme</label>
            <select
              value={currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)}
              onChange={handleThemeChange}
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring focus:ring-blue-300"
            >
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>

          {/* Language */}
          <div>
            <label className="block text-gray-800 dark:text-gray-100 font-semibold mb-2">Language</label>
            <select className="w-full p-3 border border-blue-200 rounded-lg focus:ring focus:ring-blue-300">
              <option>Somali</option>
              <option>English</option>
            </select>
          </div>

          {/* Notifications */}
          <div>
            <label className="block text-gray-800 dark:text-gray-100 font-semibold mb-2">Ogeysiisyada</label>
            <select className="w-full p-3 border border-blue-200 rounded-lg focus:ring focus:ring-blue-300">
              <option>On</option>
              <option>Off</option>
            </select>
          </div>

          {/* Account Type */}
          <div>
            <label className="block text-gray-800 dark:text-gray-100 font-semibold mb-2">Nooca Akoonka</label>
            <select className="w-full p-3 border border-blue-200 rounded-lg focus:ring focus:ring-blue-300">
              <option>Student</option>
              <option>Admin</option>
            </select>
          </div>
        </div>

        {/* Logout */}
        <div className="mt-10 text-center">
          <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-10 rounded-full font-bold shadow-md transition duration-300">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
