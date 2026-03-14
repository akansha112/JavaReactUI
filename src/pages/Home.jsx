// src/pages/Home.jsx
import React, { useState } from "react";
import ChatBox from "../components/ChatBox";
import ChatHistory from "../components/ChatHistory";
import HeroTypewriter from "../components/HeroTypewriter";

export default function Home() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      minHeight: "100vh",
      width: "100%",
      overflowX: "hidden", 
      position: "relative",
      background: "#0a0f1e" // <--- Aapka favourite theme color yahan hai
    }}>
      {/* Hero section */}
      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <HeroTypewriter />
      </div>

      {/* Main Dashboard Container */}
      <div className="main-layout">
        
        {/* Sidebar - History */}
        <div className="sidebar-container">
          <ChatHistory onSelect={setSelectedChat} />
        </div>

        {/* Main Area - ChatBox */}
        <div className="chat-container">
          <ChatBox chatHistory={selectedChat} />
        </div>
        
      </div>

      <style>{`
        /* Sabse important reset: border-box */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          width: 100%;
          background: #0a0f1e; /* Body background bhi set kar diya */
          overflow-x: hidden;
        }

        .main-layout {
          display: flex;
          flex: 1;
          padding: 0 40px 40px;
          gap: 20px;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 10;
        }

        .sidebar-container {
          flex: 0 0 300px;
          display: flex;
          flex-direction: column;
        }

        .chat-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        /* MOBILE VIEW ADJUSTMENTS */
        @media (max-width: 768px) {
          .main-layout {
            flex-direction: column-reverse; 
            padding: 0 15px 40px;
            gap: 30px;
            width: 100%;
          }

          .sidebar-container {
            flex: none;
            width: 100%;
            position: relative;
            z-index: 5;
          }

          .chat-container {
            height: 75vh; 
            width: 100%;
            position: relative;
            z-index: 100 !important;
            pointer-events: auto !important;
          }
        }
      `}</style>
    </div>
  );
}