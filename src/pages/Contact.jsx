import React, { useState, useEffect } from "react";

export default function Contact() {
  const [status, setStatus] = useState("Send Message");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Theme Colors
  const themeBg = "#0a0f1e";

  const glassStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "24px",
    padding: isMobile ? "25px" : "40px",
  };

  const cardStyle = {
    padding: "15px",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    transition: "all 0.3s ease",
    textDecoration: "none",
    color: "inherit",
    touchAction: "manipulation"
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "8px",
    marginBottom: "20px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(0,0,0,0.3)",
    color: "#fff",
    outline: "none",
    fontSize: "16px", // 16px prevents iOS zoom
    boxSizing: "border-box"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message Sent! ✨");
    setTimeout(() => setStatus("Send Message"), 3000);
  };

  return (
    <div style={{ 
      background: themeBg, // Ensures the deep dark theme
      minHeight: "100vh", 
      width: "100%",
      overflowX: "hidden",
      paddingTop: isMobile ? "80px" : "100px",
      color: "#fff"
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        <header style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: isMobile ? "2.2rem" : "3rem", marginBottom: "10px" }}>
            Get In <span style={{ color: "#6B73FF" }}>Touch</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isMobile ? "0.9rem" : "1rem" }}>
            Let's build something amazing together.
          </p>
        </header>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(320px, 1fr))", 
          gap: "30px",
          paddingBottom: "60px"
        }}>
          
          {/* LEFT SIDE: CONNECTION HUB */}
          <div style={glassStyle}>
            <h2 style={{ marginBottom: "10px", fontSize: isMobile ? "1.3rem" : "1.8rem" }}>Connect with Me</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "30px", fontSize: "0.9rem" }}>
              Reach out via email or find me on professional networks.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {/* Email Card */}
              <a href="mailto:akanshasaxena.work@gmail.com" style={cardStyle}
                 onMouseEnter={(e) => !isMobile && (e.currentTarget.style.background = "rgba(107, 115, 255, 0.2)")}
                 onMouseLeave={(e) => !isMobile && (e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)")}>
                  <span style={{ fontSize: "20px" }}>✉️</span>
                  <div style={{ overflow: "hidden" }}>
                    <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>Email Me</div>
                    <div style={{ fontWeight: "600", fontSize: isMobile ? "0.85rem" : "1rem", wordBreak: "break-all" }}>akansha.work@example.com</div>
                  </div>
              </a>

              {/* LinkedIn Card */}
              <a href="https://www.linkedin.com/in/akansha401/" target="_blank" rel="noopener noreferrer" style={cardStyle}
                 onMouseEnter={(e) => !isMobile && (e.currentTarget.style.background = "rgba(0, 119, 181, 0.2)")}
                 onMouseLeave={(e) => !isMobile && (e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)")}>
                  <span style={{ fontSize: "20px" }}>🔗</span>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>Professional</div>
                    <div style={{ fontWeight: "600", fontSize: isMobile ? "0.85rem" : "1rem" }}>LinkedIn Profile</div>
                  </div>
              </a>

              {/* GitHub Card */}
              <a href="https://github.com/akansha112" target="_blank" rel="noopener noreferrer" style={cardStyle}
                 onMouseEnter={(e) => !isMobile && (e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)")}
                 onMouseLeave={(e) => !isMobile && (e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)")}>
                  <span style={{ fontSize: "20px" }}>💻</span>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>Codebase</div>
                    <div style={{ fontWeight: "600", fontSize: isMobile ? "0.85rem" : "1rem" }}>GitHub Portfolio</div>
                  </div>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: MESSAGE FORM */}
          <div style={{ ...glassStyle, background: "rgba(255,255,255,0.08)" }}>
            <form onSubmit={handleSubmit}>
              <label style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)" }}>Full Name</label>
              <input type="text" placeholder="Your Name" style={inputStyle} required />

              <label style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)" }}>Email Address</label>
              <input type="email" placeholder="email@example.com" style={inputStyle} required />

              <label style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)" }}>Message</label>
              <textarea placeholder="Tell me about your project..." rows="4" style={{ ...inputStyle, resize: "none" }} required />

              <button type="submit" style={{
                width: "100%", padding: "16px", borderRadius: "14px", border: "none",
                background: "linear-gradient(135deg, #6B73FF, #000DFF)", color: "#fff",
                fontWeight: "bold", cursor: "pointer", transition: "all 0.3s ease",
                fontSize: "1rem", touchAction: "manipulation"
              }}>{status}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}