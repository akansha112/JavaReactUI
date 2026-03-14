// src/components/HeroTypewriter.jsx
import React, { useState, useEffect } from "react";

export default function HeroTypewriter() {
  const phrases = [
    "Hi, Welcome to AI Assistant.",
    "How can I assist you today?",
    "Ask me anything related to Akansha Saxena.",
    "Let's build the future together."
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2500);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 70);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div style={{ 
      textAlign: "center", 
      padding: "140px 20px 60px", 
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background Radial Glow for Attraction */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(107, 115, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
        zIndex: -1,
        filter: "blur(40px)"
      }} />

      <h1 style={{ 
        fontSize: "3.2rem", 
        fontWeight: "800", 
        // Gradient text for classiness
        background: "linear-gradient(to right, #fff, #A5CCFF, #6B73FF)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        letterSpacing: "-1px",
        marginBottom: "10px"
      }}>
        {phrases[index].substring(0, subIndex)}
        <span style={{ 
          marginLeft: "5px",
          borderRight: "4px solid #00D1FF", // Electric Cyan cursor
          boxShadow: "0 0 10px #00D1FF",
          animation: "blink 0.7s infinite" 
        }}></span>
      </h1>
      
      <p style={{ 
        color: "rgba(255,255,255,0.5)", 
        fontSize: "1.1rem", 
        letterSpacing: "2px", 
        textTransform: "uppercase",
        marginTop: "10px"
      }}>
        Intelligent Portfolio Interface
      </p>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}