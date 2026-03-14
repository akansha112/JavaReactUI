import React, { useState, useEffect, useRef } from "react";
import Suggestions from "./Suggestions";
import { API_BASE } from "../config";
import Loader from "./Loader";

export default function ChatBox({ chatHistory, onNewMessage }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const chatEndRef = useRef(null);

  // FIX: Sync messages state when a history item is clicked
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
    if (!question.trim()) return;

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
        padding: "25px",
        background: "rgba(255,255,255,0.05)",
        borderRadius: "24px",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(255,255,255,0.1)",
        height: "600px", // Match this with your sidebar height
        boxSizing: "border-box",
      }}
    >
      {/* Scrollable Message Container */}
      <div 
        style={{ 
          flex: 1, 
          overflowY: "auto", 
          display: "flex", 
          flexDirection: "column",
          paddingRight: "5px" 
        }} 
        className="custom-scrollbar"
      >
        {/* THIS IS THE KEY: A spacer that pushes content to the bottom */}
        <div style={{ flex: "1 1 auto" }}></div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                alignSelf: msg.user ? "flex-end" : "flex-start",
                background: msg.user 
                  ? "linear-gradient(135deg, #6B73FF, #000DFF)" 
                  : "rgba(255,255,255,0.08)",
                padding: "12px 18px",
                borderRadius: msg.user ? "18px 18px 2px 18px" : "18px 18px 18px 2px",
                marginBottom: "15px",
                maxWidth: "75%",
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

      {/* Input Section - Stays at bottom */}
      <div style={{ marginTop: "15px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "15px" }}>
        <Suggestions suggestions={suggestions} onClick={sendMessage} />
        <input
          type="text"
          value={input}
          placeholder="Ask me anything about Akansha..."
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "15px 20px",
            borderRadius: "15px",
            border: "none",
            outline: "none",
            background: "rgba(0,0,0,0.2)",
            color: "#fff",
            boxSizing: "border-box",
            fontSize: "1rem"
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