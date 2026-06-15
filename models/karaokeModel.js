const mongoose = require("mongoose");

const karaokeSchema = mongoose.Schema({
  roomNumber: String,
  capacity: Number,
  status: {
    type: String,
    enum: ["available", "occupied", "maintenance"],
  },
  pricePerHour: Number,
  features: [String],
});
module.exports = mongoose.model("Karaoke", karaokeSchema);
