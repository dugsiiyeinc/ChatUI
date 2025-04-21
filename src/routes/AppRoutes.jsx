import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import History from "../pages/History";
import BotManager from "../pages/BotManager";
import Users from "../pages/Users";
import Settings from "../pages/Settings";
import React from "react";
import ChatPage from "../pages/ChatPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/history" element={<History />} />
      <Route path="/bot" element={<BotManager />} />
      <Route path="/chatpage" element={<ChatPage/>} />
      <Route path="/users" element={<Users />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
