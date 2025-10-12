import React from "react";

const categories = [
  {
    title: "🔥 Career Trends",
    color: "#FF9800",
    description: "Discover in-demand jobs and emerging industries.",
    icon: "📈",
  },
  {
    title: "🌎 Guided Exploration",
    color: "#2196F3",
    description: "Find careers that match your interests and strengths.",
    icon: "🧭",
  },
  {
    title: "💡 Where Skills Meet Demand",
    color: "#9C27B0",
    description: "See where your skills fit best in the job market.",
    icon: "⚡",
  },
  {
    title: "🎯 How to Adapt?",
    color: "#4CAF50",
    description: "Learn how to upskill and transition your career.",
    icon: "🔄",
  },
];

const KeyCategories = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      {/* Section Title */}
      <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#333" }}>
        Explore Key Categories
      </h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "40px", color: "#666" }}>
        Get insights into career trends, skill demands, and how to adapt in a changing job market.
      </p>

      {/* Grid Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              background: category.color,
              color: "white",
              padding: "30px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
              position: "relative",
              cursor: "pointer",
              transition: "0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.children[1].style.opacity = "1")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.children[1].style.opacity = "0")
            }
          >
            <span style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
              {category.icon}
            </span>
            {category.title}

            {/* Tooltip on Hover */}
            <div
              style={{
                position: "absolute",
                bottom: "-50px",
                background: "rgba(0, 0, 0, 0.8)",
                color: "#fff",
                padding: "8px 12px",
                borderRadius: "5px",
                fontSize: "1rem",
                whiteSpace: "nowrap",
                opacity: "0",
                transition: "0.3s ease",
              }}
            >
              {category.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyCategories;
