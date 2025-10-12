import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const CareerCard = ({ title, description, icon }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div ref={cardRef} style={styles.card}>
      <div style={styles.icon}>{icon}</div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
  },
  icon: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
  },
};

// Hover Effect
styles.card["&:hover"] = {
  transform: "scale(1.05)",
};

export default CareerCard;
