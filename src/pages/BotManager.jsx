// BotManagerPage.jsx
import { useState, useEffect } from "react";

export default function BotManager() {
  const [bots, setBots] = useState(() => {
    const saved = localStorage.getItem("bots");
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        name: "Dugsiiye Bot",
        description: "An educational chatbot for student assistance.",
        category: "Education",
        active: true,
      },
    ];
  });

  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    localStorage.setItem("bots", JSON.stringify(bots));
  }, [bots]);

  const handleToggleActive = (id) => {
    const updatedBots = bots.map((bot) =>
      bot.id === id ? { ...bot, active: !bot.active } : bot
    );
    setBots(updatedBots);
    setSelectedBot((prev) =>
      prev ? { ...prev, active: !prev.active } : null
    );
  };

  const handleEdit = () => {
    const newName = prompt("Enter new bot name:", selectedBot.name);
    const newDesc = prompt("Enter new description:", selectedBot.description);
    const newCategory = prompt("Enter new category:", selectedBot.category);

    if (newName && newDesc && newCategory) {
      const updatedBots = bots.map((bot) =>
        bot.id === selectedBot.id
          ? { ...bot, name: newName, description: newDesc, category: newCategory }
          : bot
      );
      setBots(updatedBots);
      setSelectedBot({ ...selectedBot, name: newName, description: newDesc, category: newCategory });
    }
  };

  const handleDelete = () => {
    const updatedBots = bots.filter((bot) => bot.id !== selectedBot.id);
    setBots(updatedBots);
    setSelectedBot(null);
  };

  const handleAdd = () => {
    const name = prompt("Enter bot name:");
    const description = prompt("Enter description:");
    const category = prompt("Enter category:");

    if (name && description && category) {
      const newBot = {
        id: Date.now(),
        name,
        description,
        category,
        active: false,
      };
      const updated = [...bots, newBot];
      setBots(updated);
      setSelectedBot(newBot);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left panel: Bot list */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Bots</h2>
            <button
              onClick={handleAdd}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold"
            >
              + New Bot
            </button>
          </div>
          <ul className="space-y-3">
            {bots.map((bot) => (
              <li
                key={bot.id}
                onClick={() => setSelectedBot(bot)}
                className={`p-3 rounded-lg cursor-pointer border hover:bg-gray-200 ${
                  selectedBot?.id === bot.id ? "bg-gray-300" : "bg-gray-100"
                }`}
              >
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">{bot.name}</span>
                  <span
                    className={`text-sm font-medium ${
                      bot.active ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {bot.active ? "Active" : "Inactive"}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right panel: Bot preview */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Bot Preview</h2>
          {selectedBot ? (
            <div className="space-y-4 text-black">
              <div>
                <h3 className="text-lg font-semibold">{selectedBot.name}</h3>
                <p className="text-gray-600 text-black">{selectedBot.description}</p>
              </div>
              <p>
                <strong>Category:</strong> {selectedBot.category}
              </p>
              <div className="flex items-center gap-2 text-black">
                <strong>Active</strong>
                <input
                  type="checkbox"
                  checked={selectedBot.active}
                  onChange={() => handleToggleActive(selectedBot.id)}
                  className="toggle toggle-primary"
                />
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={handleEdit}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-600">Select a bot to view details</p>
          )}
        </div>
      </div>
    </div>
  );
}
