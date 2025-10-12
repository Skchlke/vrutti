require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// 🛠️ MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // your MySQL password
  database: "auth_db", // your DB name
});

db.connect((err) => {
  if (err) console.error("❌ Database Connection Failed:", err);
  else console.log("✅ Connected to MySQL Database");
});

// 🔐 JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// 📌 User Registration Route
app.post("/auth/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res.status(400).json({ error: "All fields are required" });

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (results.length > 0)
      return res.status(400).json({ error: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword],
      (err) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.json({ message: "Registration successful" });
      }
    );
  });
});

// 📌 User Login Route
// 📌 User Login Route
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (results.length === 0)
      return res.status(400).json({ error: "User not found" });

    const user = results[0];
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid)
      return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });

    // ✅ Fix: return the username along with token and message
    res.json({ 
      message: "Login successful", 
      token, 
      name: user.username // 🟢 This is what your frontend expects
    });
  });
});


// 📌 Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
