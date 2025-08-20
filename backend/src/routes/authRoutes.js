const express = require("express");
const router = express.Router();

// POST /api/auth/register
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Normally, you'd save the user to MongoDB here
  res.status(201).json({
    message: "User registered successfully",
    user: { name, email },
  });
});

// POST /api/auth/login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Normally, you'd verify user credentials in MongoDB here
  res.status(200).json({
    message: "Login successful",
    user: { email },
    token: "dummy_jwt_token" // replace with real JWT after implementing auth
  });
});

module.exports = router;
