// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 60px",
    background: "rgba(10, 15, 30, 0.7)", // Deep elegant dark blue
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
    boxSizing: "border-box"
  };

  const linkStyle = (path) => ({
    marginLeft: "30px",
    textDecoration: "none",
    fontSize: "0.9rem",
    letterSpacing: "1px",
    textTransform: "uppercase",
    transition: "color 0.3s ease",
    color: location.pathname === path ? "#6B73FF" : "rgba(255,255,255,0.7)",
    fontWeight: location.pathname === path ? "700" : "400"
  });

  return (
    <nav style={navStyle}>
      <div style={{ fontSize: "1.5rem", fontWeight: "800", letterSpacing: "-1px" }}>
        PORTFOLIO<span style={{ color: "#6B73FF" }}>AI</span>
      </div>
      <div>
        <Link style={linkStyle("/home")} to="/home">Home</Link>
        <Link style={linkStyle("/about")} to="/about">About</Link>
        <Link style={linkStyle("/contact")} to="/contact">Contact</Link>
      </div>
    </nav>
  );
}