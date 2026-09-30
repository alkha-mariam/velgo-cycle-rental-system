const db = require("../config/db");

// ==============================
// CREATE BOOKING
// ==============================

const createBooking = (req, res) => {
    const {
        full_name,
        email,
        phone,
        cycle_type,
        rental_plan,
        amount,
        pickup_date,
        return_date
    } = req.body;

    const sql = `
        INSERT INTO bookings
        (
            full_name,
            email,
            phone,
            cycle_type,
            rental_plan,
            amount,
            pickup_date,
            return_date
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        full_name,
        email,
        phone,
        cycle_type,
        rental_plan,
        amount,
        pickup_date,
        return_date
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error inserting booking:", err);

            return res.status(500).json({
                message: "Failed to create booking"
            });
        }

        res.status(201).json({
            message: "Booking created successfully",
            bookingId: result.insertId
        });
    });
};


// ==============================
// GET ALL BOOKINGS
// ==============================

const getBookings = (req, res) => {
    const sql = `
        SELECT *
        FROM bookings
        ORDER BY created_at DESC
    `;

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching bookings:", err);

            return res.status(500).json({
                message: "Failed to fetch bookings"
            });
        }

        res.status(200).json(results);
    });
};


// ==============================
// DELETE / CANCEL BOOKING
// ==============================

const deleteBooking = (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM bookings WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Error deleting booking:", err);

            return res.status(500).json({
                message: "Failed to cancel booking"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Booking not found"
            });
        }

        res.status(200).json({
            message: "Booking cancelled successfully"
        });
    });
};


// ==============================
// EXPORT FUNCTIONS
// ==============================

module.exports = {
    createBooking,
    getBookings,
    deleteBooking
};