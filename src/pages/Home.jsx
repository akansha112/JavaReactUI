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
      overflowX: "hidden" // Prevents horizontal scrolling on mobile
    }}>
      <HeroTypewriter />

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
        .main-layout {
          display: flex;
          flex: 1;
          padding: 0 40px 40px;
          gap: 20px;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
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
          min-width: 0; /* Fixes flexbox overflow issues */
        }

        /* MOBILE VIEW ADJUSTMENTS */
        @media (max-width: 768px) {
          .main-layout {
            flex-direction: column-reverse; /* Put ChatBox on top, History below */
            padding: 0 15px 20px;
            gap: 15px;
          }

          .sidebar-container {
            flex: none;
            width: 100%;
          }

          .chat-container {
            height: 500px; /* Fixed height for chat on mobile */
          }
        }
      `}</style>
    </div>
  );
}