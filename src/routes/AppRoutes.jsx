// import { FaSun, FaMoon } from 'react-icons/fa';

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

import History from "../pages/History";
import BotManager from "../pages/BotManager";
import Users from "../pages/Users";
import Settings from "../pages/Settings";
import React, { useState } from "react";
import ChatPage from "../pages/ChatPage";

// import Profile from "../components/Profile";
import Login from "../components/Login";
import UnAuthenticatedRoute from "../components/UnAuthenticatedRoute";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import Layout from "../Layouts/MainLayout";
// import ChatPage from './pages/ChatPage';
import PrivateRoute from '../components/PrivateRoute';
import { FaSun, FaMoon } from 'react-icons/fa';
import Profile from "../components/Profile";

// import { useState } from "react";

export default function AppRoutes() {
  const [darkMode, setDarkMode] = useState(true);
 
  return (
    <Routes>
      
       <Route element={<Layout/>}></Route>
      <Route path="/" element={<Home />} />
      
      <Route path="/history" element={<History />} />
      <Route path="/bot" element={<BotManager />} />
      <Route path="/" element={<Login/>} />
        <Route path="/signup" element={< SignUpPage/>} />
        {/* <Route path="/profile" element={<Profile/>} /> */}
   <Route path="/chatpage" element={
  <PrivateRoute>
    <ChatPage />
  </PrivateRoute>
} />
       <Route path="/profile" element={<Profile/>} />
      <Route path="/users" element={<Users />} />
      <Route path="/settings" element={<Settings />} />
      <Route path='/signin'
              element={
                <UnAuthenticatedRoute>
                  
                  <SignInPage/>
                </UnAuthenticatedRoute>
              } />

            <Route path='/signup'
              element={
                <UnAuthenticatedRoute>
                  <SignUpPage/>
                </UnAuthenticatedRoute>
              }
            />
          
    </Routes>
  );
}
