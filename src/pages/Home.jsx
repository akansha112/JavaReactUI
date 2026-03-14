// src/pages/Home.jsx
import React, { useState } from "react";
import ChatBox from "../components/ChatBox";
import ChatHistory from "../components/ChatHistory";
import HeroTypewriter from "../components/HeroTypewriter";

export default function Home() {
  const [selectedChat, setSelectedChat] = useState(null);

  const containerStyle = {
    display: "flex", 
    flexDirection: "column", 
    minHeight: "100vh",
    background: "transparent" // Uses global gradient
  };

  const chatLayoutStyle = {
    display: "flex", 
    padding: "0 40px 60px", 
    gap: "30px", 
    flex: 1,
    maxWidth: "1300px",
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box"
  };

  return (
    <div style={containerStyle}>
      {/* Centered professional typewriter */}
      <HeroTypewriter />

      {/* Main interaction area */}
      <div style={chatLayoutStyle}>
        <div style={{ flex: "1" }}>
          <ChatHistory onSelect={setSelectedChat} />
        </div>
        <div style={{ flex: "2.5" }}>
          <ChatBox chatHistory={selectedChat} />
        </div>
      </div>
    </div>
  );
}