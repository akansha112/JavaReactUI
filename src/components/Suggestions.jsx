// src/components/Suggestions.jsx
import React from "react";

export default function Suggestions({ suggestions = [], onClick }) {
  if (!suggestions.length) return null;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginTop: "10px",
      }}
    >
      {suggestions.map((s, idx) => (
        <button
          key={idx}
          onClick={() => onClick(s)}
          style={{
            padding: "6px 12px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            background: "rgba(255,255,255,0.2)",
            color: "#fff",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.3)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.2)")
          }
        >
          {s}
        </button>
      ))}
    </div>
  );
}