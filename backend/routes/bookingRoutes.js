const express = require("express");

const router = express.Router();

const {
    createBooking,
    getBookings,
    deleteBooking
} = require("../controllers/bookingController");


// CREATE BOOKING
router.post("/", createBooking);


// VIEW ALL BOOKINGS
router.get("/", getBookings);


// CANCEL / DELETE BOOKING
router.delete("/:id", deleteBooking);


module.exports = router;