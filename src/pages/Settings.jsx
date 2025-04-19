import React, { useState } from 'react'

const Settings = () => {
  // Sample bot data
  const [bots, setBots] = useState([
    { id: 1, name: "Customer Support Bot", status: "Active", model: "GPT-4", responses: 1205, rating: 4.7 },
    { id: 2, name: "Sales Assistant", status: "Inactive", model: "GPT-3.5", responses: 856, rating: 4.2 },
    { id: 3, name: "Technical Help", status: "Active", model: "Claude 2", responses: 1542, rating: 4.8 },
    { id: 4, name: "FAQ Bot", status: "Maintenance", model: "GPT-4", responses: 2304, rating: 4.5 }
  ]);

  // Toggle bot status
  const toggleStatus = (id) => {
    setBots(bots.map(bot => 
      bot.id === id 
        ? {...bot, status: bot.status === "Active" ? "Inactive" : "Active"} 
        : bot
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Settings</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">Bot Manager Configuration</h2>
          <p className="text-sm text-gray-600 mt-1">Manage and configure your chatbots</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bot Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Responses</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bots.map((bot) => (
                <tr key={bot.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{bot.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${bot.status === 'Active' ? 'bg-green-100 text-green-800' : 
                        bot.status === 'Inactive' ? 'bg-gray-100 text-gray-800' : 
                        'bg-yellow-100 text-yellow-800'}`}>
                      {bot.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bot.model}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bot.responses.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900 mr-2">{bot.rating}</span>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`h-4 w-4 ${i < Math.floor(bot.rating) ? 'text-amber-400' : 'text-gray-300'}`} 
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => toggleStatus(bot.id)}
                      className={`mr-2 px-3 py-1 rounded text-white ${bot.status === 'Active' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}>
                      {bot.status === 'Active' ? 'Deactivate' : 'Activate'}
                    </button>
                    <button className="px-3 py-1 rounded text-white bg-blue-500 hover:bg-blue-600">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <button className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors">
            Add New Bot
          </button>
        </div>
      </div>
      
      {/* General Settings Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">General Settings</h2>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Interface Theme</h3>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-gray-800 text-white rounded">Dark Mode</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">Light Mode</button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Default Response Mode</h3>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm rounded-md">
              <option>Detailed responses</option>
              <option>Concise responses</option>
              <option>Technical responses</option>
              <option>Casual conversation</option>
            </select>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Notification Settings</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="email-notifications" className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded" defaultChecked />
                <label htmlFor="email-notifications" className="ml-2 block text-sm text-gray-900">Email Notifications</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="push-notifications" className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded" defaultChecked />
                <label htmlFor="push-notifications" className="ml-2 block text-sm text-gray-900">Push Notifications</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
