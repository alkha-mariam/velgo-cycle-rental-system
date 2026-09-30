import { Link } from "react-router-dom";
import CycleCard from "../components/CycleCard";
import "../styles/Home.css";

function Home() {
  const cycles = [
    {
      name: "Trailblazer Pro",
      type: "Mountain Bike",
      price: 100,
      description: "A strong and comfortable bike for adventurous routes.",
      image:
        "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "City Cruiser",
      type: "Hybrid Bike",
      price: 80,
      description: "A smooth everyday ride for exploring the city.",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Velocity X",
      type: "Road Bike",
      price: 120,
      description: "A lightweight road bike built for fast city rides.",
      image:
        "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "VoltRide",
      type: "Electric Bike",
      price: 150,
      description: "An electric ride that makes longer journeys easier.",
      image:
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Choose Your Ride",
      description:
        "Browse our collection and select the cycle that suits your journey.",
    },
    {
      number: "2",
      title: "Book Online",
      description:
        "Choose your rental plan and reserve your cycle in a few simple steps.",
    },
    {
      number: "3",
      title: "Pick Up",
      description:
        "Collect your cycle from your selected VelGo pickup point.",
    },
    {
      number: "4",
      title: "Ride & Explore",
      description:
        "Enjoy your ride and explore your city your way.",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">PREMIUM CYCLE RENTALS</p>

          <h1 className="hero-title">Ride Your Way.</h1>

          <p className="hero-subtitle">
            Explore the city, discover new routes, and experience the freedom
            of riding on two wheels.
          </p>

          <div className="hero-buttons">
            <Link to="/cycles" className="btn btn-primary">
              Explore Cycles
            </Link>

            <Link to="/booking" className="btn btn-secondary">
              Book a Cycle
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=900&q=80"
            alt="VelGo bicycle"
          />
        </div>
      </section>

      {/* Featured Cycles */}
      <section className="featured-cycles">
        <div className="container">
          <p className="hero-label" style={{ textAlign: "center" }}>
            OUR FLEET
          </p>

          <h2>Featured Cycles</h2>

          <p className="section-subtitle">
            Choose the perfect ride for your next adventure.
          </p>

          <div className="cycles-grid">
            {cycles.map((cycle) => (
              <CycleCard
                key={cycle.name}
                name={cycle.name}
                type={cycle.type}
                price={cycle.price}
                description={cycle.description}
                image={cycle.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why VelGo */}
      <section className="why-velgo">
        <div className="container">
          <p
            className="hero-label"
            style={{ textAlign: "center" }}
          >
            WHY CHOOSE US
          </p>

          <h2>Why VelGo?</h2>

          <p className="section-subtitle">
            Everything you need for a simple and enjoyable cycling experience.
          </p>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">✓</div>
              <h3>Well-Maintained Cycles</h3>
              <p>
                Our cycles are regularly checked and maintained for a smooth
                ride.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">₹</div>
              <h3>Affordable Pricing</h3>
              <p>
                Flexible rental plans make cycling accessible for everyone.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">↗</div>
              <h3>Easy Booking</h3>
              <p>
                Select your cycle and rental plan through a simple booking
                process.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">★</div>
              <h3>Safety First</h3>
              <p>
                We focus on providing reliable cycles and a safe rental
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <p
            className="hero-label"
            style={{ textAlign: "center" }}
          >
            SIMPLE PROCESS
          </p>

          <h2>How It Works</h2>

          <p className="section-subtitle">
            Get your ride in four simple steps.
          </p>

          <div className="steps-grid">
            {steps.map((step) => (
              <div className="step-card" key={step.number}>
                <div className="step-number">{step.number}</div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Ride?</h2>

          <p>
            Choose your cycle, pick your plan, and start your next adventure.
          </p>

          <Link to="/booking" className="btn btn-primary">
            Book Your Cycle
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;