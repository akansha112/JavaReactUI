// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false); // For Mobile Menu Toggle

  // Update mobile state on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: isMobile ? "15px 20px" : "15px 60px", // Reduced padding on mobile
    background: "rgba(10, 15, 30, 0.85)", 
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
    boxSizing: "border-box"
  };

  const linkStyle = (path) => ({
    marginLeft: isMobile ? "0" : "30px",
    marginTop: isMobile ? "20px" : "0",
    textDecoration: "none",
    fontSize: "0.9rem",
    letterSpacing: "1px",
    textTransform: "uppercase",
    transition: "color 0.3s ease",
    color: location.pathname === path ? "#6B73FF" : "rgba(255,255,255,0.7)",
    fontWeight: location.pathname === path ? "700" : "400",
    display: isMobile ? "block" : "inline-block"
  });

  const mobileMenuOverlay = {
    position: "fixed",
    top: "65px", // Height of navbar
    left: 0,
    width: "100%",
    height: "calc(100vh - 65px)",
    background: "rgba(10, 15, 30, 0.98)",
    display: isOpen ? "flex" : "none",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "50px",
    zIndex: 999,
    transition: "all 0.3s ease"
  };

  return (
    <>
      <nav style={navStyle}>
        {/* Logo */}
        <div style={{ fontSize: isMobile ? "1.2rem" : "1.5rem", fontWeight: "800", letterSpacing: "-1px" }}>
          PORTFOLIO<span style={{ color: "#6B73FF" }}>AI</span>
        </div>

        {/* Desktop Links */}
        {!isMobile && (
          <div>
            <Link style={linkStyle("/home")} to="/home">Home</Link>
            <Link style={linkStyle("/about")} to="/about">About</Link>
            <Link style={linkStyle("/contact")} to="/contact">Contact</Link>
          </div>
        )}

        {/* Mobile Menu Icon (Hamburger) */}
        {isMobile && (
          <div 
            onClick={() => setIsOpen(!isOpen)} 
            style={{ cursor: "pointer", padding: "5px" }}
          >
            <div style={{ width: "25px", height: "2px", background: "#fff", margin: "5px 0" }}></div>
            <div style={{ width: "25px", height: "2px", background: "#fff", margin: "5px 0" }}></div>
            <div style={{ width: "25px", height: "2px", background: "#fff", margin: "5px 0" }}></div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobile && (
        <div style={mobileMenuOverlay}>
          <Link onClick={() => setIsOpen(false)} style={linkStyle("/home")} to="/home">Home</Link>
          <Link onClick={() => setIsOpen(false)} style={linkStyle("/about")} to="/about">About</Link>
          <Link onClick={() => setIsOpen(false)} style={linkStyle("/contact")} to="/contact">Contact</Link>
        </div>
      )}
    </>
  );
}