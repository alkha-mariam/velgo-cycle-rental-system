import { useState } from "react";
import { useLocation } from "react-router-dom";

import "../styles/Booking.css";

function Booking() {
    const location = useLocation();

    // Get selected plan from Pricing page
    const selectedPlan = location.state?.plan || "";
    const selectedPrice = location.state?.price || "";
    const selectedPriceValue = location.state?.priceValue || 0;
    const selectedDuration = location.state?.duration || "";

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        cycleType: "",
        rentalStart: "",
        returnBy: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    // Stores the ID of the booking created in MySQL
    const [bookingId, setBookingId] = useState(null);

    const cycleOptions = [
        "Trailblazer Pro",
        "Peak Rider",
        "City Cruiser",
        "Urban Explorer",
        "Velocity X",
        "Speed Demon",
        "VoltRide",
        "E-Cruiser Pro"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };


    // ==============================
    // CREATE BOOKING
    // ==============================

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.fullName ||
            !formData.phone ||
            !formData.email ||
            !formData.cycleType ||
            !formData.rentalStart ||
            !formData.returnBy
        ) {
            alert("Please fill in all fields.");
            return;
        }

        // Plan must be selected
        if (!selectedPlan) {
            alert("Please select a rental plan from the Pricing page.");
            return;
        }

        // Check that return date is not before rental date
        if (formData.returnBy < formData.rentalStart) {
            alert("Return date cannot be before rental start date.");
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:5000/api/bookings",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        full_name: formData.fullName,
                        email: formData.email,
                        phone: formData.phone,
                        cycle_type: formData.cycleType,

                        // Selected pricing plan
                        rental_plan: selectedPlan,

                        // Selected price
                        amount: selectedPriceValue,

                        pickup_date: formData.rentalStart,
                        return_date: formData.returnBy
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert("Booking saved successfully!");

                // Save the database ID of this booking
                setBookingId(data.bookingId);

                // Show booking confirmation
                setIsSubmitted(true);
            } else {
                alert(data.message || "Booking failed.");
            }

        } catch (error) {
            console.error("Error:", error);

            alert("Unable to connect to the server.");
        }
    };


    // ==============================
    // CANCEL BOOKING
    // ==============================

    const handleCancelBooking = async () => {
        if (!bookingId) {
            alert("Booking ID not found.");
            return;
        }

        const confirmCancel = window.confirm(
            "Are you sure you want to cancel this booking?"
        );

        if (!confirmCancel) {
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:5000/api/bookings/${bookingId}`,
                {
                    method: "DELETE"
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert("Booking cancelled successfully!");

                // Clear booking ID
                setBookingId(null);

                // Show booking form again
                setIsSubmitted(false);

                // Clear form
                setFormData({
                    fullName: "",
                    phone: "",
                    email: "",
                    cycleType: "",
                    rentalStart: "",
                    returnBy: ""
                });

            } else {
                alert(
                    data.message ||
                    "Failed to cancel booking."
                );
            }

        } catch (error) {
            console.error(
                "Error cancelling booking:",
                error
            );

            alert("Unable to connect to the server.");
        }
    };


    // ==============================
    // BOOK ANOTHER RIDE
    // ==============================

    const handleBookAnother = () => {
        setBookingId(null);

        setIsSubmitted(false);

        setFormData({
            fullName: "",
            phone: "",
            email: "",
            cycleType: "",
            rentalStart: "",
            returnBy: ""
        });
    };


    return (
        <main className="booking-page">

            <section className="booking-main">

                {/* =========================
                    LEFT IMAGE CARD
                ========================== */}

                <div className="booking-image-card">

                    <img
                        src="https://images.unsplash.com/photo-1606224547099-b15c94ca5ef2?q=80&w=766&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="VelGo bicycle"
                    />

                    <div className="booking-image-overlay"></div>

                    <div className="ready-content">

                        <h2>
                            Ready to Ride?
                        </h2>

                        <p>
                            Book your perfect cycle in seconds
                            and hit the city streets with
                            unmatched energy.
                        </p>

                    </div>

                </div>


                {/* =========================
                    RIGHT FORM
                ========================== */}

                <div className="booking-form-card">

                    {!isSubmitted ? (

                        <>

                            <div className="booking-heading">

                                <h1>
                                    Reserve Your Cycle
                                </h1>

                                <p>
                                    Fill out the details below to
                                    secure your ride today.
                                </p>

                            </div>


                            {/* =========================
                                SELECTED PLAN
                            ========================== */}

                            {selectedPlan && (

                                <div className="selected-plan-box">

                                    <div className="selected-plan-label">
                                        SELECTED RENTAL PLAN
                                    </div>

                                    <div className="selected-plan-details">

                                        <div>
                                            <h3>
                                                {selectedPlan}
                                            </h3>

                                            <p>
                                                {selectedDuration}
                                            </p>
                                        </div>

                                        <div className="selected-plan-price">
                                            {selectedPrice}
                                        </div>

                                    </div>

                                </div>

                            )}


                            <form onSubmit={handleSubmit}>

                                {/* NAME + PHONE */}

                                <div className="booking-row">

                                    <div className="booking-field">

                                        <label htmlFor="fullName">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            placeholder="Jane Doe"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                        />

                                    </div>


                                    <div className="booking-field">

                                        <label htmlFor="phone">
                                            Phone Number
                                        </label>

                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="+1 (555) 000-0000"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />

                                    </div>

                                </div>


                                {/* EMAIL */}

                                <div className="booking-field">

                                    <label htmlFor="email">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="jane@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />

                                </div>


                                {/* CYCLE TYPE */}

                                <div className="booking-field">

                                    <label htmlFor="cycleType">
                                        Cycle Type
                                    </label>

                                    <select
                                        id="cycleType"
                                        name="cycleType"
                                        value={formData.cycleType}
                                        onChange={handleChange}
                                    >

                                        <option value="">
                                            Select a cycle style
                                        </option>

                                        {cycleOptions.map((cycle) => (

                                            <option
                                                key={cycle}
                                                value={cycle}
                                            >
                                                {cycle}
                                            </option>

                                        ))}

                                    </select>

                                </div>


                                {/* DATES */}

                                <div className="booking-row">

                                    <div className="booking-field">

                                        <label htmlFor="rentalStart">
                                            Rental Start
                                        </label>

                                        <input
                                            type="date"
                                            id="rentalStart"
                                            name="rentalStart"
                                            value={formData.rentalStart}
                                            onChange={handleChange}
                                        />

                                    </div>


                                    <div className="booking-field">

                                        <label htmlFor="returnBy">
                                            Return By
                                        </label>

                                        <input
                                            type="date"
                                            id="returnBy"
                                            name="returnBy"
                                            value={formData.returnBy}
                                            onChange={handleChange}
                                        />

                                    </div>

                                </div>


                                {/* =========================
                                    TOTAL PRICE
                                ========================== */}

                                {selectedPlan && (

                                    <div className="booking-total">

                                        <span>
                                            TOTAL RENTAL CHARGE
                                        </span>

                                        <strong>
                                            {selectedPrice}
                                        </strong>

                                    </div>

                                )}


                                {/* CONFIRM BOOKING BUTTON */}

                                <button
                                    type="submit"
                                    className="confirm-booking-btn"
                                >

                                    <span>
                                        CONFIRM BOOKING
                                    </span>

                                    <span className="arrow">
                                        →
                                    </span>

                                </button>

                            </form>

                        </>

                    ) : (

                        /* =========================
                           BOOKING SUCCESS
                        ========================== */

                        <div className="booking-success">

                            <div className="success-check">
                                ✓
                            </div>

                            <h2>
                                Booking Confirmed!
                            </h2>

                            <p>
                                Your cycle has been successfully reserved.
                            </p>


                            {/* SELECTED PLAN */}

                            <div className="success-plan">

                                <p>
                                    RENTAL PLAN
                                </p>

                                <h3>
                                    {selectedPlan}
                                </h3>

                                <strong>
                                    {selectedPrice}
                                </strong>

                                <span>
                                    {selectedDuration}
                                </span>

                            </div>


                            {/* BOOKING ID */}

                            {bookingId && (

                                <p className="booking-id">
                                    Booking ID: #{bookingId}
                                </p>

                            )}


                            {/* CANCEL BOOKING */}

                            <button
                                type="button"
                                className="cancel-booking-btn"
                                onClick={handleCancelBooking}
                            >
                                CANCEL BOOKING
                            </button>


                            {/* BOOK ANOTHER RIDE */}

                            <button
                                type="button"
                                className="confirm-booking-btn"
                                onClick={handleBookAnother}
                            >
                                BOOK ANOTHER RIDE
                            </button>

                        </div>

                    )}

                </div>

            </section>

        </main>
    );
}

export default Booking;