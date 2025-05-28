// App.jsx
// import React, { useState, useEffect } from 'react';
import { useEffect} from 'react';


import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import ChatPage from "./pages/ChatPage";
// import Settings from "./pages/Settings";
// import SideBar from "./components/Sidebar";



// import UpdateMessage from "./components/UpdateMessage";

function App() {
  //   const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  // useEffect(() => {
  //   document.documentElement.classList.remove("light", "dark");
  //   document.documentElement.classList.add(theme);
  //   localStorage.setItem("theme", theme);
  // }, [theme]);
 


  
  return (
    <BrowserRouter>
     <Header/>
       {/* your routes or layout */}
      {/* //<Settings setTheme={setTheme} currentTheme={theme} /> */}
    
      
      {/* <NavBar /> */}
      <AppRoutes />
       {/* <UpdateMessage/> */}
       {/* <Chatwindow chat={activeChat} />
<ChatInput onSendMessage={handleSendMessage} /> */}
    {/* Sidebar */}


     
      <Footer/>
    </BrowserRouter>
  );

}
export default App;
