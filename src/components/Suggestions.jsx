// src/components/Suggestions.jsx
import React, { useState, useEffect } from "react";

export default function Suggestions({ suggestions = [], onClick }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!suggestions.length) return null;

  return (
    <div
      style={{
        display: "flex",
        // WRAP is the key: it forces items to the next line instead of cutting off
        flexWrap: "wrap", 
        gap: isMobile ? "8px" : "10px",
        marginTop: "12px",
        marginBottom: "12px",
        width: "100%", 
        // Ensures padding doesn't push the width past 100%
        boxSizing: "border-box",
        justifyContent: "flex-start",
        padding: "0 5px"
      }}
    >
      {suggestions.map((s, idx) => (
        <button
          key={idx}
          onClick={(e) => {
            e.preventDefault();
            onClick(s);
          }}
          style={{
            padding: isMobile ? "6px 12px" : "8px 16px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.15)",
            cursor: "pointer",
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
            fontSize: isMobile ? "0.75rem" : "0.85rem",
            // This prevents long text from breaking the layout
            maxWidth: "100%",
            whiteSpace: "normal", 
            textAlign: "left",
            lineHeight: "1.4",
            transition: "all 0.2s ease",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            WebkitTapHighlightColor: "transparent",
            // Helps mobile browsers treat it as a primary action
            touchAction: "manipulation" 
          }}
          // Hover effect only for desktop to avoid mobile stickiness
          onMouseEnter={(e) => !isMobile && (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
          onMouseLeave={(e) => !isMobile && (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
        >
          {s}
        </button>
      ))}
    </div>
  );
}