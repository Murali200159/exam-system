const express = require("express");
const app = express();

// ✅ Import auth routes (ensure path is correct)
const authRoutes = require("./routes/authRoutes");

// ✅ Middleware to parse JSON bodies
app.use(express.json());

// ✅ Root route — test if server is running
app.get("/", (req, res) => {
  res.json({ message: "✅ Server is running!" });
});

// ✅ Use auth routes under /api/auth
app.use("/api/auth", authRoutes);

// ✅ 404 handler — catch all unmatched routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
