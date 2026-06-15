require("dotenv").config();
const express = require("express");
const path = require("path");
const database = require("./config/database");
const bookingRoutes = require("./routes/bookingRoutes");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(async (req, res, next) => {
  try {
    await database();
    next();
  } catch (error) {
    res.status(500).send(`<h1>Database Connection Error</h1><p>${error.message}</p>`);
  }
});

app.use("/bookings", bookingRoutes);
app.get("/", (req, res) => {
  res.redirect("/bookings");
});
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at http://localhost:${process.env.PORT || 3000}`);
});
module.exports = app;
