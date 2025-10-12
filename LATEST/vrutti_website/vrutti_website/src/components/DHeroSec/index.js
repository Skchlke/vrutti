import React from "react";
import discoverImage from "../../images/Profession.jpeg"; // Import image from src/images

const DHeroSec = () => {
  const navigateToAsses = () => {
    // Navigating to the "asses" page
    window.location.href = "/asses"; // Redirect to asses page
  };

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        flexDirection: "row", // Align content horizontally
        justifyContent: "space-between", // Space out content and image
        alignItems: "center",
        background: "linear-gradient(to right, #6a11cb, #2575fc)", // Soft Blue → Purple
        color: "white",
        padding: "50px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Content */}
      <div
        style={{
          maxWidth: "55%", // Limit content width
          paddingLeft: "90px", // Space between image and text
          textAlign: "left", // Left align text for a more professional look
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "bold",
            marginBottom: "15px", // Adds spacing between heading & subtext
            
          }}
        >
          Discover Your Purpose, Passion, and Future!
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "700px",
            lineHeight: "1.5", // Improves readability
            marginBottom: "20px",
          }}
        >
          Explore trending careers, find roles that align with your skills, and
          gain insights to shape your professional journey.
        </p>

        {/* CTA Button */}
        <button
          style={{
            padding: "12px 24px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#ff9800",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#e68900")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ff9800")}
          onClick={navigateToAsses} // Trigger navigate to asses page on button click
        >
          Start Your Journey
        </button>
      </div>

      {/* Image */}
      <div
        style={{
          maxWidth: "50%", // Limit image width
          height: "100%", // Ensures the image fills the height of the section
        }}
      >
        <img
          src={discoverImage} // Use the imported image here
          alt="Discover Your Purpose"
          style={{
            width: "100%", // Make the image responsive
            height: "100%", // Ensure it takes the full height of the container
            paddingRight: "90px", // Space between image and text

            objectFit: "contain", // Ensure the image fits within the section
          }}
        />
      </div>
    </div>
  );
};

export default DHeroSec;
