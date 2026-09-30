import { useEffect, useState } from "react";
import "../styles/History.css";

function History() {
    const [rentalHistory, setRentalHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch bookings from MySQL through the backend
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/bookings"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch bookings");
                }

                const data = await response.json();

                // Sort bookings by actual database ID
                // Oldest booking first
                const sortedBookings = [...data].sort(
                    (a, b) => a.id - b.id
                );

                setRentalHistory(sortedBookings);
            } catch (error) {
                console.error("Error fetching bookings:", error);
                setError("Unable to load rental history.");
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    // Format date as: 10 Sep 2026
    const formatDate = (dateString) => {
        if (!dateString) {
            return "N/A";
        }

        const date = new Date(dateString);

        return date.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
    };

    // Calculate booking status
    const getBookingStatus = (pickupDate, returnDate) => {
        const today = new Date();

        today.setHours(0, 0, 0, 0);

        const pickup = new Date(pickupDate);
        const returnDateValue = new Date(returnDate);

        pickup.setHours(0, 0, 0, 0);
        returnDateValue.setHours(0, 0, 0, 0);

        if (today < pickup) {
            return "Upcoming";
        }

        if (today >= pickup && today <= returnDateValue) {
            return "Active";
        }

        return "Completed";
    };

    // CANCEL / DELETE BOOKING
    const handleCancelBooking = async (id) => {
        const confirmCancel = window.confirm(
            "Are you sure you want to cancel this booking?"
        );

        if (!confirmCancel) {
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:5000/api/bookings/${id}`,
                {
                    method: "DELETE"
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert("Booking cancelled successfully!");

                // Remove the cancelled booking from the page
                setRentalHistory((previousBookings) =>
                    previousBookings.filter(
                        (booking) => booking.id !== id
                    )
                );
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

            alert(
                "Unable to connect to the server."
            );
        }
    };

    // Count active bookings
    const activeBookings = rentalHistory.filter(
        (rental) =>
            getBookingStatus(
                rental.pickup_date,
                rental.return_date
            ) === "Active"
    ).length;

    // Summary statistics
    const summaryStats = [
        {
            id: 1,
            label: "Total Rides",
            value: rentalHistory.length,
            icon: "🚴"
        },
        {
            id: 2,
            label: "Total Bookings",
            value: rentalHistory.length,
            icon: "📋"
        },
        {
            id: 3,
            label: "Active Rental",
            value: activeBookings,
            icon: "⏱️"
        }
    ];

    return (
        <div className="history">

            {/* Hero Section */}
            <section className="history-hero">
                <div className="container history-hero-content">
                    <h1>Rental History</h1>

                    <p>
                        View your previous and current rides with VelGo.
                    </p>
                </div>
            </section>


            {/* Summary Section */}
            <section className="summary-section">
                <div className="container">

                    <div className="summary-cards">

                        {summaryStats.map((stat) => (
                            <div
                                key={stat.id}
                                className="summary-card"
                            >

                                <div className="summary-icon">
                                    {stat.icon}
                                </div>

                                <div className="summary-content">

                                    <p className="summary-label">
                                        {stat.label}
                                    </p>

                                    <p className="summary-value">
                                        {stat.value}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>


            {/* History Table */}
            <section className="history-table-section">
                <div className="container">

                    <h2>Your Ride History</h2>

                    <p className="table-subtitle">
                        All your previous and current bookings
                    </p>


                    {/* Loading message */}
                    {loading && (
                        <p>
                            Loading your bookings...
                        </p>
                    )}


                    {/* Error message */}
                    {error && (
                        <p>
                            {error}
                        </p>
                    )}


                    {/* No bookings */}
                    {!loading &&
                        !error &&
                        rentalHistory.length === 0 && (
                            <p>
                                No bookings found.
                            </p>
                        )}


                    {/* Booking table */}
                    {!loading &&
                        !error &&
                        rentalHistory.length > 0 && (

                            <div className="table-wrapper">

                                <table className="history-table">

                                    <thead>
                                        <tr>
                                            <th>Booking ID</th>
                                            <th>Customer</th>
                                            <th>Phone</th>
                                            <th>Cycle</th>
                                            <th>Pickup Date</th>
                                            <th>Return Date</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>


                                    <tbody>

                                        {rentalHistory.map((rental) => {

                                            const status =
                                                getBookingStatus(
                                                    rental.pickup_date,
                                                    rental.return_date
                                                );

                                            return (
                                                <tr key={rental.id}>

                                                    {/* Booking ID */}
                                                    <td data-label="Booking ID">
                                                        <strong>
                                                            #{rental.id}
                                                        </strong>
                                                    </td>


                                                    {/* Customer */}
                                                    <td data-label="Customer">
                                                        <span className="customer-name">
                                                            {rental.full_name}
                                                        </span>
                                                    </td>


                                                    {/* Phone */}
                                                    <td data-label="Phone">
                                                        {rental.phone}
                                                    </td>


                                                    {/* Cycle */}
                                                    <td data-label="Cycle">
                                                        {rental.cycle_type}
                                                    </td>


                                                    {/* Pickup Date */}
                                                    <td data-label="Pickup Date">
                                                        {formatDate(
                                                            rental.pickup_date
                                                        )}
                                                    </td>


                                                    {/* Return Date */}
                                                    <td data-label="Return Date">
                                                        {formatDate(
                                                            rental.return_date
                                                        )}
                                                    </td>


                                                    {/* Status */}
                                                    <td data-label="Status">

                                                        <span
                                                            className={`status-badge ${status.toLowerCase()}`}
                                                        >
                                                            {status}
                                                        </span>

                                                    </td>


                                                    {/* Cancel Button */}
                                                    <td data-label="Action">

                                                        <button
                                                            type="button"
                                                            className="cancel-booking-btn"
                                                            onClick={() =>
                                                                handleCancelBooking(
                                                                    rental.id
                                                                )
                                                            }
                                                        >
                                                            Cancel
                                                        </button>

                                                    </td>

                                                </tr>
                                            );
                                        })}

                                    </tbody>

                                </table>

                            </div>
                        )}

                </div>
            </section>


            {/* Rental Tips */}
            <section className="additional-info">
                <div className="container">

                    <h2>Rental Tips & Guidelines</h2>

                    <div className="tips-grid">

                        <div className="tip-card">
                            <div className="tip-number">1</div>

                            <h3>Before Your Ride</h3>

                            <p>
                                Check the cycle condition, ensure all parts
                                are working properly, and wear your helmet.
                            </p>
                        </div>


                        <div className="tip-card">
                            <div className="tip-number">2</div>

                            <h3>During Your Ride</h3>

                            <p>
                                Follow traffic rules, stay safe, and be
                                mindful of other road users. Enjoy responsibly!
                            </p>
                        </div>


                        <div className="tip-card">
                            <div className="tip-number">3</div>

                            <h3>After Your Ride</h3>

                            <p>
                                Return the cycle on time, report any damages,
                                and keep your receipt for records.
                            </p>
                        </div>


                        <div className="tip-card">
                            <div className="tip-number">4</div>

                            <h3>Get Support</h3>

                            <p>
                                Need help? Contact our support team 24/7.
                                We're here to assist you anytime.
                            </p>
                        </div>

                    </div>

                </div>
            </section>


            {/* Journey Statistics */}
            <section className="stats-section">
                <div className="container">

                    <h2>Your VelGo Journey</h2>

                    <div className="journey-stats">

                        <div className="journey-stat">
                            <div className="stat-figure">
                                {rentalHistory.length}
                            </div>

                            <div className="stat-name">
                                Total Bookings
                            </div>
                        </div>


                        <div className="journey-stat">
                            <div className="stat-figure">
                                {activeBookings}
                            </div>

                            <div className="stat-name">
                                Active Rentals
                            </div>
                        </div>


                        <div className="journey-stat">
                            <div className="stat-figure">
                                {rentalHistory.filter(
                                    (rental) =>
                                        getBookingStatus(
                                            rental.pickup_date,
                                            rental.return_date
                                        ) === "Completed"
                                ).length}
                            </div>

                            <div className="stat-name">
                                Completed Rides
                            </div>
                        </div>


                        <div className="journey-stat">
                            <div className="stat-figure">
                                {new Set(
                                    rentalHistory.map(
                                        (rental) => rental.cycle_type
                                    )
                                ).size}
                            </div>

                            <div className="stat-name">
                                Different Cycles Used
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    );
}

export default History;