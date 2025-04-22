// ChatSidebar.js
import React from "react";
import SideBar from "./SideBar";

const ChatSidebar = ({ chats, onNewChat, onSelectChat }) => {
  return <SideBar chats={chats} onNewChat={onNewChat} onSelectChat={onSelectChat} />;
};

export default ChatSidebar;