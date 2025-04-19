import React, { useState } from 'react'

const BotManager = () => {
  // Sample bot data
  const [bots, setBots] = useState([
    { 
      id: 1, 
      name: "Customer Support Bot", 
      description: "Handles customer inquiries and support tickets",
      avatar: "https://img.freepik.com/free-vector/cute-robot-wearing-suit-cartoon-vector-icon-illustration_138676-2827.jpg",
      status: "Active", 
      model: "GPT-4", 
      language: "English",
      conversations: 1205,
      created: "2023-11-15"
    },
    { 
      id: 2, 
      name: "Sales Assistant", 
      description: "Helps customers find products and complete purchases",
      avatar: "https://img.freepik.com/free-vector/cute-robot-holding-phone-cartoon-vector-icon-illustration_138676-2816.jpg",
      status: "Inactive", 
      model: "GPT-3.5", 
      language: "English, Spanish",
      conversations: 856,
      created: "2023-12-02"
    },
    { 
      id: 3, 
      name: "Technical Help", 
      description: "Provides technical support and troubleshooting",
      avatar: "https://img.freepik.com/free-vector/cute-robot-wearing-glasses-cartoon-vector-icon-illustration_138676-2822.jpg",
      status: "Active", 
      model: "Claude 2", 
      language: "English",
      conversations: 1542,
      created: "2023-10-30"
    },
    { 
      id: 4, 
      name: "FAQ Bot", 
      description: "Answers frequently asked questions about services",
      avatar: "https://img.freepik.com/free-vector/cute-robot-with-question-mark-cartoon-vector-icon-illustration_138676-2606.jpg",
      status: "Maintenance", 
      model: "GPT-4", 
      language: "English, French, German",
      conversations: 2304,
      created: "2023-09-18"
    }
  ]);

  const [selectedBot, setSelectedBot] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const handleSelectBot = (bot) => {
    setSelectedBot(bot);
    setActiveTab('overview');
  };

  const toggleStatus = (id) => {
    setBots(bots.map(bot => 
      bot.id === id 
        ? {...bot, status: bot.status === "Active" ? "Inactive" : "Active"} 
        : bot
    ));
    
    if (selectedBot && selectedBot.id === id) {
      setSelectedBot({...selectedBot, status: selectedBot.status === "Active" ? "Inactive" : "Active"});
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Bot Manager</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Bot List - Left Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-800">My Bots</h2>
              <button className="px-3 py-1 bg-amber-500 text-white text-sm rounded hover:bg-amber-600 transition-colors">
                + New Bot
              </button>
            </div>
            
            <div className="divide-y divide-gray-200">
              {bots.map(bot => (
                <div 
                  key={bot.id}
                  onClick={() => handleSelectBot(bot)}
                  className={`p-4 cursor-pointer transition-colors ${
                    selectedBot && selectedBot.id === bot.id 
                      ? 'bg-amber-50 border-l-4 border-amber-500' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <img 
                      src={bot.avatar}
                      alt={bot.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 truncate">{bot.name}</h3>
                      <div className="flex items-center mt-1">
                        <span className={`w-2 h-2 rounded-full mr-1 ${
                          bot.status === 'Active' ? 'bg-green-500' : 
                          bot.status === 'Inactive' ? 'bg-gray-400' :
                          'bg-yellow-500'
                        }`}></span>
                        <p className="text-xs text-gray-500">{bot.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bot Details - Right Panel */}
        <div className="lg:col-span-3">
          {selectedBot ? (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Bot Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center">
                  <img 
                    src={selectedBot.avatar}
                    alt={selectedBot.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800">{selectedBot.name}</h2>
                    <p className="text-gray-600 mt-1">{selectedBot.description}</p>
                  </div>
                  <div>
                    <button 
                      onClick={() => toggleStatus(selectedBot.id)}
                      className={`px-4 py-2 rounded text-white ${
                        selectedBot.status === 'Active' 
                          ? 'bg-red-500 hover:bg-red-600' 
                          : 'bg-green-500 hover:bg-green-600'
                      }`}
                    >
                      {selectedBot.status === 'Active' ? 'Deactivate' : 'Activate'}
                    </button>
                  </div>
                </div>
                
                {/* Tabs */}
                <div className="flex border-b border-gray-200 mt-6">
                  <button 
                    onClick={() => setActiveTab('overview')}
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === 'overview'
                        ? 'border-b-2 border-amber-500 text-amber-600'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Overview
                  </button>
                  <button 
                    onClick={() => setActiveTab('training')}
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === 'training'
                        ? 'border-b-2 border-amber-500 text-amber-600'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Training
                  </button>
                  <button 
                    onClick={() => setActiveTab('responses')}
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === 'responses'
                        ? 'border-b-2 border-amber-500 text-amber-600'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Responses
                  </button>
                  <button 
                    onClick={() => setActiveTab('analytics')}
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === 'analytics'
                        ? 'border-b-2 border-amber-500 text-amber-600'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Analytics
                  </button>
                  <button 
                    onClick={() => setActiveTab('settings')}
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === 'settings'
                        ? 'border-b-2 border-amber-500 text-amber-600'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Settings
                  </button>
                </div>
              </div>
              
              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm font-medium text-gray-500">Model</div>
                        <div className="mt-1 text-lg font-semibold">{selectedBot.model}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm font-medium text-gray-500">Languages</div>
                        <div className="mt-1 text-lg font-semibold">{selectedBot.language}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm font-medium text-gray-500">Total Conversations</div>
                        <div className="mt-1 text-lg font-semibold">{selectedBot.conversations.toLocaleString()}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Bot Description</h3>
                      <p className="text-gray-600">
                        {selectedBot.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam auctor, nisi eget ultricies ultrices, nunc nunc aliquet nunc, vitae 
                        aliquam nisl nunc vitae nisl. Nulla facilisi. Sed vitae nisl eget nunc 
                        aliquet aliquam.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Recent Activity</h3>
                      <div className="space-y-3">
                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                          <div className="text-sm">Completed 15 conversations today</div>
                          <div className="ml-auto text-xs text-gray-500">2 hours ago</div>
                        </div>
                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                          <div className="text-sm">Training data updated</div>
                          <div className="ml-auto text-xs text-gray-500">Yesterday</div>
                        </div>
                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                          <div className="text-sm">Model updated to {selectedBot.model}</div>
                          <div className="ml-auto text-xs text-gray-500">3 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'training' && (
                  <div className="text-center py-16">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Training Section</h3>
                    <p className="text-gray-600">This section is under development</p>
                  </div>
                )}
                
                {activeTab === 'responses' && (
                  <div className="text-center py-16">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Responses Section</h3>
                    <p className="text-gray-600">This section is under development</p>
                  </div>
                )}
                
                {activeTab === 'analytics' && (
                  <div className="text-center py-16">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Analytics Section</h3>
                    <p className="text-gray-600">This section is under development</p>
                  </div>
                )}
                
                {activeTab === 'settings' && (
                  <div className="text-center py-16">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Settings Section</h3>
                    <p className="text-gray-600">This section is under development</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-10 text-center">
              <img 
                src="https://img.freepik.com/free-vector/cute-robot-cartoon-vector-icon-illustration-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3571.jpg"
                alt="Select a bot"
                className="w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-medium text-gray-900 mb-2">Select a Bot</h3>
              <p className="text-gray-600">Choose a bot from the left panel to view and manage its settings</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BotManager
