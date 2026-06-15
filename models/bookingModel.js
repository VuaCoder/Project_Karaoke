const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  customerName: String,
  roomNumber: String,
  startTime: Date,
  endTime: Date,
  totalAmount: Number,
});

module.exports = mongoose.model("Booking", bookingSchema);
