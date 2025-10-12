import React from "react";
import CareerCard from "../CareerCard";

const careers = [
  { title: "Software Engineer", description: "Build innovative software solutions.", icon: "💻" },
  { title: "Data Scientist", description: "Analyze data to derive insights.", icon: "📊" },
  { title: "Digital Marketer", description: "Create impactful marketing strategies.", icon: "📢" },
];

const CareerList = () => {
  return (
    <div style={styles.container}>
      {careers.map((career, index) => (
        <CareerCard key={index} {...career} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "50px",
  },
};

export default CareerList;
