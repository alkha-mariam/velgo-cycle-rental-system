CREATE DATABASE IF NOT EXISTS velgo_rental;

USE velgo_rental;

CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    cycle_type VARCHAR(100) NOT NULL,
    rental_plan VARCHAR(50) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    pickup_date DATE NOT NULL,
    return_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);