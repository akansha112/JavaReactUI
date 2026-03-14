// src/components/Loader.jsx
import React from "react";

export default function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
      <div
        style={{
          border: "4px solid rgba(255,255,255,0.3)",
          borderTop: "4px solid #fff",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          animation: "spin 1s linear infinite",
        }}
      />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}