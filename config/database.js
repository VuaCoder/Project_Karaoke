const mongoose = require("mongoose");

let cachedConnection = null;

const connectDB = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }

  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL environment variable is missing");
  }

  try {
    cachedConnection = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected");
    return cachedConnection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

module.exports = connectDB;
