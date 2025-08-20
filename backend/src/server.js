const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  console.log("🔎 Loaded MONGO_URI:", process.env.MONGO_URI);
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ Server failed to start", err);
  }
};

startServer();
