// App.jsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import ChatPage from "./pages/ChatPage";
// import SideBar from "./components/Sidebar";

import Chatwindow from "./components/Chatwindow";
import ChatInput from "./components/ChatInput";
// import UpdateMessage from "./components/UpdateMessage";

function App() {
 


  
  return (
    <BrowserRouter>
     <Header/>
    
      
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
