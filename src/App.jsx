// App.jsx
// import React, { useState, useEffect } from 'react';
import { useEffect} from 'react';

import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useTheme } from './context/ThemeContext';

import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import ChatPage from "./pages/ChatPage";
// import Settings from "./pages/Settings";
// import SideBar from "./components/Sidebar";



// import UpdateMessage from "./components/UpdateMessage";

function App() {
   const { currentTheme } = useTheme();
  //  const [darkMode, setDarkMode] = useState(true);
  //   const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  // useEffect(() => {
  //   document.documentElement.classList.remove("light", "dark");
  //   document.documentElement.classList.add(theme);
  //   localStorage.setItem("theme", theme);
  // }, [theme]);
 


  
  return (
     <div className={currentTheme === 'dark' ? 'bg-white text-black' : 'bg-gray-900 text-white'}>
      {/* Here you render your routes or pages */}

                  <BrowserRouter>
     <Header/>
       {/* your routes or layout */}
      {/* //<Settings setTheme={setTheme} currentTheme={theme} /> */}
    
      
      {/* <NavBar /> */}
      {/* <AppRoutes /> */}
       {/* <UpdateMessage/> */}
       {/* <Chatwindow chat={activeChat} />
<ChatInput onSendMessage={handleSendMessage} /> */}
    {/* Sidebar */}

        <AuthProvider>
      <AppRoutes />
    </AuthProvider>
     
      <Footer/>
    </BrowserRouter>


    </div>

  );

}
export default App;
