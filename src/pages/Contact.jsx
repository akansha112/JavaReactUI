// src/pages/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("Send Message");

  const glassStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "24px",
    padding: "40px",
  };

  const cardStyle = {
    padding: "20px",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "8px",
    marginBottom: "20px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(0,0,0,0.2)",
    color: "#fff",
    outline: "none",
    fontSize: "1rem",
    boxSizing: "border-box"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message Sent! ✨");
    setTimeout(() => setStatus("Send Message"), 3000);
  };

  return (
    <div style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
      <header style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
          Get In <span style={{ color: "#6B73FF" }}>Touch</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.6)" }}>Let's build something amazing together.</p>
      </header>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
        gap: "30px" 
      }}>
        
        {/* LEFT SIDE: CONNECTION HUB */}
        <div style={glassStyle}>
          <h2 style={{ marginBottom: "10px" }}>Connect with Me</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "30px", fontSize: "0.95rem" }}>
            Reach out via email or find me on professional networks.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            
            {/* Email Card */}
            <a href="mailto:akanshasaxena.work@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
              <div 
                style={cardStyle}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(107, 115, 255, 0.2)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"}
              >
                <span style={{ fontSize: "24px" }}>✉️</span>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>Email Me</div>
                  <div style={{ fontWeight: "600" }}>akansha.saxena@example.com</div>
                </div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a href="https://www.linkedin.com/in/akansha401/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <div 
                style={cardStyle}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(0, 119, 181, 0.2)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"}
              >
                <span style={{ fontSize: "24px" }}>🔗</span>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>Professional</div>
                  <div style={{ fontWeight: "600" }}>LinkedIn Profile</div>
                </div>
              </div>
            </a>

            {/* GitHub Card */}
            <a href="https://github.com/akansha112" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <div 
                style={cardStyle}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"}
              >
                <span style={{ fontSize: "24px" }}>💻</span>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>Codebase</div>
                  <div style={{ fontWeight: "600" }}>GitHub Portfolio</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: MESSAGE FORM */}
        <div style={{ ...glassStyle, background: "rgba(255,255,255,0.08)" }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }}>Full Name</label>
              <input type="text" placeholder="Your Name" style={inputStyle} required />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }}>Email Address</label>
              <input type="email" placeholder="email@example.com" style={inputStyle} required />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }}>Message</label>
              <textarea placeholder="Tell me about your project..." rows="4" style={{ ...inputStyle, resize: "none" }} required />
            </div>

            <button 
              type="submit"
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "14px",
                border: "none",
                background: "linear-gradient(135deg, #6B73FF, #000DFF)",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 10px 20px rgba(107,115,255,0.3)",
                transition: "all 0.3s ease",
                marginTop: "10px"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 15px 25px rgba(107,115,255,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(107,115,255,0.3)";
              }}
            >
              {status}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}