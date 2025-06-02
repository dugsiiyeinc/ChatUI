import { Link } from "react-router-dom";
import React from "react";
import { MdDarkMode } from "react-icons/md";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  


     
    <div className="min-h-screen bg-gray-50">
     
      {/* Part 1: Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 px-4">
       
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-400 mb-6">
              Dugsiiye Bot<br />Chat Interface
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Dugsiiye Bot allows you to easily ask questions related to Dugsiiye mentorship , advice, and other services. It’s an intelligent assistant available 24/7..
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/chatpage" className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition-colors">
                chats
              </Link>
              <Link to="/bot" className="px-8 py-3 border-2 border-amber-400 text-amber-400 font-semibold rounded-lg hover:bg-amber-400 hover:text-gray-900 transition-colors">
                Manage Bots
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src="https://media.gettyimages.com/id/1572197029/video/seamless-loop-digital-screen-with-funny-chatbot-icon-and-abstract-glowing-circular-background.jpg?s=640x640&k=20&c=zbGrT3VKuXU_0x1lQrVOSBke4qsDxy1_xgxlf-w9NLo=" 
              alt="AI Chatbot" 
              className="w-full max-w-md rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
         <div             className={`w-full pl-8 pr-3 py-1 rounded 
              ${MdDarkMode ? "bg-gray-800 text-white placeholder-gray-400" : "bg-gray-100 text-black placeholder-gray-500"}`}></div>
      {/* Part 2: Bot Manager Features */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Bot Manager Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-vector/chatbot-artificial-intelligence-abstract-concept-illustration_335657-3738.jpg" 
                  alt="Bot Creation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-amber-500">Create Custom Bots</h3>
                <p className="text-gray-600">Design and customize your own chatbots with different personalities and response patterns.</p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-vector/chat-bot-concept-illustration_114360-5522.jpg" 
                  alt="Bot Configuration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-amber-500">Manage Responses</h3>
                <p className="text-gray-600">Configure how your bots respond to different inputs and train them with custom data sets.</p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-vector/chatbot-concept-illustration_114360-5206.jpg" 
                  alt="Analytics" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-amber-500">Performance Analytics</h3>
                <p className="text-gray-600">Track bot performance, user satisfaction, and conversation metrics to improve engagement.</p>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-vector/customer-support-illustration_23-2148889374.jpg" 
                  alt="Integration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-amber-500">Multi-Platform Integration</h3>
                <p className="text-gray-600">Deploy your bots across multiple platforms and channels to reach users wherever they are.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/bot" className="inline-block px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition-colors">
              Explore Bot Manager
            </Link>
          </div>
        </div>
      </div>

      {/* Part 3: Use Cases with Image */}
      <div className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-amber-400">Popular Use Cases</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors border border-gray-700">
                  <h3 className="text-xl font-bold mb-3 text-amber-400">Customer Support</h3>
                  <p className="text-gray-300">Provide 24/7 support to your customers with intelligent chatbots that can handle common inquiries, troubleshoot issues, and escalate to human agents when needed.</p>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors border border-gray-700">
                  <h3 className="text-xl font-bold mb-3 text-amber-400">Lead Generation</h3>
                  <p className="text-gray-300">Capture and qualify leads through interactive conversations. Our bots can collect contact information, answer product questions, and schedule demos with your sales team.</p>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors border border-gray-700">
                  <h3 className="text-xl font-bold mb-3 text-amber-400">E-commerce Assistant</h3>
                  <p className="text-gray-300">Help customers find products, answer questions about inventory and shipping, and provide personalized product recommendations to increase sales.</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <img 
                src="https://img.freepik.com/free-vector/ai-technology-brain-background-digital-transformation-concept_53876-125996.jpg" 
                alt="AI Chatbot Use Cases" 
                className="rounded-xl shadow-2xl max-w-full lg:max-w-lg border-4 border-amber-400"
              />
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link to="/chat" className="inline-block px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition-colors">
              Try a Demo Bot
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
