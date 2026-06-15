const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/controller");

router.get("/", bookingController.showAllBooking);
router.get("/add", bookingController.showAddForm);
router.post("/add", bookingController.addBooking);
router.get("/update/:id", bookingController.showUpdateForm);
router.post("/update/:id", bookingController.updateBooking);
router.get("/delete/:id", bookingController.deleteBooking);

module.exports = router;
