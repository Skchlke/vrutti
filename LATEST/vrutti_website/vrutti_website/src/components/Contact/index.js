import React, { useState } from "react";

const Contact = () => {
  // State for form input
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" }); // Clear form after submission
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #6a11cb, #2575fc)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          width: "80%",
          maxWidth: "900px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "40px",
          borderRadius: "10px",
          display: "flex",
          gap: "30px",
        }}
      >
        {/* Left: Contact Form */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>📩 Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ ...inputStyle, height: "120px" }}
            ></textarea>
            <button type="submit" style={buttonStyle}>Send Message</button>
          </form>
        </div>

        {/* Right: Contact Details */}
        <div style={{ flex: 1, paddingLeft: "20px" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>📍 Contact Info</h2>
          <p style={infoStyle}>📧 Email: support@vrutti.com</p>
          <p style={infoStyle}>📞 Phone: +91 9876543210</p>
          <p style={infoStyle}>📍 Address: Mumbai, India</p>
          <div style={{ marginTop: "20px" }}>
            <a href="https://linkedin.com" style={socialStyle}>🔗 LinkedIn</a>
            <a href="https://twitter.com" style={socialStyle}>🐦 Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline Styles
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "none",
  fontSize: "1rem",
  outline: "none",
  transition: "0.3s",
  backgroundColor: "#f8f8f8",
  color: "#333",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#10B981",
  color: "white",
  fontSize: "1.2rem",
  fontWeight: "bold",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "0.3s",
};

const infoStyle = {
  fontSize: "1.1rem",
  marginBottom: "10px",
};

const socialStyle = {
  display: "block",
  textDecoration: "none",
  color: "#1DA1F2",
  fontSize: "1.2rem",
  marginBottom: "10px",
};

export default Contact;
