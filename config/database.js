const mongoose = require("mongoose");

const connectDB = async () => {
  if (!process.env.MONGO_URL) {
    console.error("Database connection error: MONGO_URL is not defined in environment variables!");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
  }
};

module.exports = connectDB;

