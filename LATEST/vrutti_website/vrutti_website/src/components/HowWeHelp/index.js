import React from "react";

const insights = [
  {
    title: "🔍 Real-time Career Trends",
    color: "#1E3A8A", // Deep Blue
    description: "Discover which careers & skills are in demand today.",
    icon: "📊",
  },
  {
    title: "🎯 Find Your Fit",
    color: "#6A1B9A", // Vibrant Purple
    description: "Explore careers that match your personal strengths.",
    icon: "🧩",
  },
  {
    title: "🚀 Future-Proof Your Career",
    color: "#FDD835", // Bright Yellow
    description: "Learn how to upskill & stay ahead in the job market.",
    icon: "🔮",
  },
];

const HowWeHelp = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      {/* Section Title */}
      <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#333" }}>
        How We Help You
      </h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "40px", color: "#666" }}>
        Unlike generic career portals, Vrutti provides real-time insights, personalized guidance, and strategies to future-proof your career.
      </p>

      {/* Cards Layout */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {insights.map((insight, index) => (
          <div
            key={index}
            style={{
              background: insight.color,
              color: "white",
              padding: "30px",
              borderRadius: "10px",
              flex: "1",
              minWidth: "280px",
              maxWidth: "350px",
              textAlign: "center",
              transition: "0.3s ease",
              cursor: "pointer",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <span style={{ fontSize: "2.5rem", marginBottom: "15px", display: "block" }}>
              {insight.icon}
            </span>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{insight.title}</h3>
            <p style={{ fontSize: "1rem", opacity: "0.9" }}>{insight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeHelp;
