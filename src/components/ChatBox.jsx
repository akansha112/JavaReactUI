// src/components/ChatBox.jsx
import React, { useState, useEffect, useRef } from "react";
import Suggestions from "./Suggestions";
import { API_BASE } from "../config";
import Loader from "./Loader";

export default function ChatBox({ chatHistory, onNewMessage }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const chatEndRef = useRef(null);

  // Handle screen resize for mobile detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sync messages state when a history item is clicked
  useEffect(() => {
    if (chatHistory) {
      setMessages([
        { text: chatHistory.question, user: true },
        { text: chatHistory.answer, user: false },
      ]);
    }
  }, [chatHistory]);

  // Fetch suggestions
  useEffect(() => {
    fetch(`${API_BASE}/suggestions`)
      .then((res) => res.json())
      .then(setSuggestions)
      .catch(console.error);
  }, []);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (question) => {
    if (!question || !question.trim()) return;

    setMessages((prev) => [...prev, { text: question, user: true }]);
    setLoading(true);
    setInput("");

    try {
      const res = await fetch(`${API_BASE}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) throw new Error("Backend error");
      const data = await res.json();
      setMessages((prev) => [...prev, { text: data.answer, user: false }]);
      onNewMessage?.();
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { text: "Error fetching answer from backend.", user: false },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        flex: 3,
        display: "flex",
        flexDirection: "column",
        padding: isMobile ? "15px" : "25px",
        // Increased opacity to 0.12 so it's not pitch black
        background: "rgba(255, 255, 255, 0.12)", 
        borderRadius: "24px",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)", 
        border: "1px solid rgba(255, 255, 255, 0.15)",
        // Responsive height for mobile
        height: isMobile ? "75vh" : "600px", 
        boxSizing: "border-box",
        position: "relative",
        zIndex: 50, // Ensures it sits above background glows
        touchAction: "manipulation" // Removes mobile tap delay
      }}
    >
      {/* Scrollable Message Container */}
      <div 
        style={{ 
          flex: 1, 
          overflowY: "auto", 
          display: "flex", 
          flexDirection: "column",
          paddingRight: "5px",
          WebkitOverflowScrolling: "touch" // Smoother scrolling on iPhone
        }} 
        className="custom-scrollbar"
      >
        <div style={{ flex: "1 1 auto" }}></div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                alignSelf: msg.user ? "flex-end" : "flex-start",
                background: msg.user 
                  ? "linear-gradient(135deg, #6B73FF, #000DFF)" 
                  : "rgba(255,255,255,0.1)", // Light bubble for visibility
                padding: "12px 18px",
                borderRadius: msg.user ? "18px 18px 2px 18px" : "18px 18px 18px 2px",
                marginBottom: "15px",
                maxWidth: isMobile ? "85%" : "75%",
                wordBreak: "break-word",
                fontSize: "0.95rem",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                border: msg.user ? "none" : "1px solid rgba(255,255,255,0.05)",
                color: "#fff",
              }}
            >
              {msg.text}
            </div>
          ))}
          {loading && <Loader />}
          <div ref={chatEndRef}></div>
        </div>
      </div>

      {/* Input Section */}
      <div style={{ 
        marginTop: "15px", 
        borderTop: "1px solid rgba(255,255,255,0.1)", 
        paddingTop: "15px",
        position: "relative",
        zIndex: 60
      }}>
        {/* Horizontal scroll for suggestions on mobile */}
        <div style={{ 
          overflowX: "auto", 
          whiteSpace: "nowrap", 
          paddingBottom: "10px",
          marginBottom: "5px"
        }}>
          <Suggestions suggestions={suggestions} onClick={sendMessage} />
        </div>
        
        <input
          type="text"
          value={input}
          placeholder="Ask me anything..."
          style={{
            width: "100%",
            marginTop: "5px",
            padding: isMobile ? "12px 15px" : "15px 20px",
            borderRadius: "15px",
            border: "none",
            outline: "none",
            background: "rgba(0,0,0,0.4)", // Darker for contrast
            color: "#fff",
            boxSizing: "border-box",
            // CRITICAL: 16px font prevents auto-zoom on iPhone which blocks clicks
            fontSize: "16px", 
            touchAction: "manipulation"
          }}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage(input);
          }}
        />
      </div>
    </div>
  );
}