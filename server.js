require("dotenv").config();
const express = require("express");
const database = require("./config/database");
const bookingRoutes = require("./routes/bookingRoutes");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
database();
app.use("/bookings", bookingRoutes);
app.get("/", (req, res) => {
  res.redirect("/bookings");
});
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
module.exports = app;
