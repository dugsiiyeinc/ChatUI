import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

import History from "../pages/History";
import BotManager from "../pages/BotManager";
import Users from "../pages/Users";
import Settings from "../pages/Settings";
import React from "react";
import ChatPage from "../pages/ChatPage";
import Signup from "../components/Signup";
import Profile from "../components/Profile";
import Login from "../components/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/history" element={<History />} />
      <Route path="/bot" element={<BotManager />} />
      <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
      <Route path="/chatpage" element={<ChatPage/>} />
      <Route path="/users" element={<Users />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
