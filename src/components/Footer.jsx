import React from "react";

export default function Footer() {
  return (
    <footer 
      style={{ 
        width: "100%", 
        padding: "20px", 
        textAlign: "center", 
        background: "#0a0f1e", // Wahi dark theme color
        color: "rgba(255, 255, 255, 0.6)", // Text thoda subtle rakha hai
        fontSize: "0.9rem",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)", // Ek patli line separator ke liye
        position: "relative",
        zIndex: 10,
        boxSizing: "border-box"
      }}
    >
      © 2026 Akansha Saxena | Portfolio AI Assistant
    </footer>
  );
}