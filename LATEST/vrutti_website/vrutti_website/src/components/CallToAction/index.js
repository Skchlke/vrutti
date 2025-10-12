import React from "react";

const CallToAction = () => {
  return (
    <div
      style={{
        backgroundColor: "#111827", // Dark theme
        color: "white",
        textAlign: "center",
        padding: "50px 20px",
      }}
    >
      {/* Heading */}
      <h2 style={{ fontSize: "2.5rem", marginBottom: "15px", fontWeight: "bold" }}>
        🚀 Ready to Find Your Perfect Career?
      </h2>

      {/* Subtext */}
      <p style={{ fontSize: "1.2rem", marginBottom: "30px", opacity: "0.9" }}>
        Explore career insights, trending jobs, and personalized recommendations to shape your future.
      </p>

      {/* CTA Button */}
      <a
        href="/career-survey" // Change link as needed
        style={{
          display: "inline-block",
          backgroundColor: "#10B981", // Green color
          color: "white",
          fontSize: "1.2rem",
          fontWeight: "bold",
          padding: "15px 30px",
          borderRadius: "8px",
          textDecoration: "none",
          transition: "0.3s ease",
          boxShadow: "0 4px 10px rgba(0, 255, 128, 0.2)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#059669")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#10B981")}
      >
        Start Your Career Discovery Now
      </a>
    </div>
  );
};

export default CallToAction;
