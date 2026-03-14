// src/components/ChatHistory.jsx
import React, { useEffect, useState } from "react";
import { API_BASE } from "../config";

const historyStyle = {
  flex: 1,
  overflowY: "auto",
  padding: "15px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  marginRight: "20px",
  minHeight: "500px",
};

const itemStyle = {
  padding: "10px",
  borderRadius: "15px",
  cursor: "pointer",
  marginBottom: "10px",
  background: "rgba(255,255,255,0.1)",
  transition: "all 0.2s",
};

export default function ChatHistory({ onSelect }) {
  const [history, setHistory] = useState([]);

  // Fetch chat history from backend
  const fetchHistory = async () => {
    try {
      const res = await fetch(`${API_BASE}/history`);
      const data = await res.json();
      setHistory(data.reverse()); // show latest first
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div style={historyStyle}>
      <h3>Chat History</h3>
      {history.map((h, idx) => (
        <div
          key={idx}
          style={itemStyle}
          onClick={() => onSelect(h)}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
        >
          <strong>You:</strong> {h.question.slice(0, 40)}...
        </div>
      ))}
    </div>
  );
}