import React, { useState, useEffect } from "react";

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const features = [
    { title: "AI-Powered", desc: "Utilizes advanced LLMs to provide intelligent, context-aware responses about my professional journey." },
    { title: "Real-time History", desc: "Tracks your conversation history instantly using a SpringBoot backend and high-performance database." },
    { title: "Dynamic Suggestions", desc: "Smart prompts help you discover my skills, projects, and experience without typing a word." },
    { title: "Responsive Glass UI", desc: "A modern, sleek interface built with React that looks stunning on any device or screen size." },
  ];

  // Theme Color
  const themeBg = "#0a0f1e";

  const glassStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "24px",
    padding: isMobile ? "20px" : "30px",
    transition: "transform 0.3s ease, background 0.3s ease",
  };

  return (
    <div style={{ 
      background: themeBg, // Solid Midnight Blue Theme
      minHeight: "100vh",
      width: "100%",
      overflowX: "hidden", // Purple line fix
      color: "#fff",
      // Mobile pe content navbar ke neeche na dabe isliye padding
      paddingTop: isMobile ? "100px" : "120px",
      paddingBottom: "60px"
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        
        {/* App Introduction */}
        <section style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1 style={{ fontSize: isMobile ? "2.2rem" : "3rem", marginBottom: "20px", fontWeight: "800" }}>
            About <span style={{ color: "#6B73FF" }}>Portfolio AI</span>
          </h1>
          <p style={{ fontSize: isMobile ? "1rem" : "1.2rem", lineHeight: "1.6", color: "rgba(255,255,255,0.8)", maxWidth: "800px", margin: "0 auto" }}>
            This application is more than just a chatbot; it is a digital twin designed to represent my work, 
            personality, and technical expertise. Built with a React frontend and a robust SpringBoot backend.
          </p>
        </section>

        {/* Glass Features Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "25px" 
        }}>
          {features.map((f, i) => (
            <div 
              key={i} 
              style={glassStyle}
              onMouseEnter={(e) => {
                if(!isMobile) {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if(!isMobile) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                }
              }}
            >
              <div style={{ 
                width: "40px", 
                height: "40px", 
                background: "linear-gradient(135deg, #6B73FF, #000DFF)", 
                borderRadius: "10px", 
                marginBottom: "20px" 
              }}></div>
              <h3 style={{ marginBottom: "12px", fontSize: isMobile ? "1.2rem" : "1.4rem" }}>{f.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.5", fontSize: "0.95rem" }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Visual Element */}
        <div style={{ 
          marginTop: "60px", 
          textAlign: "center", 
          padding: isMobile ? "30px 20px" : "40px", 
          ...glassStyle, 
          background: "linear-gradient(135deg, rgba(107,115,255,0.1), rgba(0,13,255,0.1))" 
        }}>
          <h2 style={{ fontSize: isMobile ? "1.3rem" : "1.8rem" }}>Ready to explore?</h2>
          <p style={{ fontSize: isMobile ? "0.9rem" : "1.1rem", opacity: 0.8 }}>Head back to the Home page to start a conversation with the AI.</p>
        </div>
      </div>
    </div>
  );
}