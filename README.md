# VelGo – Cycle Rental System

A full-stack cycle rental web application developed using React.js, Node.js, Express.js, and MySQL.

## Project Overview

VelGo is a cycle rental system that allows users to explore available cycles, view rental plans, make bookings, view booking history, and cancel bookings.

The project consists of a React frontend, an Express/Node.js backend, and a MySQL database.

## Features

- Home page
- About page
- Cycle listing
- Pricing plans
- Cycle booking
- Booking history
- Cancel booking
- Contact page
- React Router navigation
- REST API integration
- MySQL database
- Responsive user interface

## 🛠️ Technologies Used

### Frontend

- React.js
- JavaScript
- HTML
- CSS
- React Router
- Vite

### Backend

- Node.js
- Express.js
- CORS
- Fetch API

### Database

- MySQL
- MySQL2
- XAMPP
- phpMyAdmin

## Project Structure

```text
cycle-rental-system/
│
├── backend/
│   ├── .env.example
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── bookingController.js
│   ├── routes/
│   │   └── bookingRoutes.js
│   ├── package.json
│   └── server.js
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CycleCard.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Booking.jsx
│   │   ├── Contact.jsx
│   │   ├── Cycles.jsx
│   │   ├── History.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   └── Pricing.jsx
│   └── styles/
│
├── database.sql
├── package.json
├── README.md
└── vite.config.js
