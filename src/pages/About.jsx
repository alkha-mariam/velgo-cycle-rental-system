import { Link } from "react-router-dom";
import "../styles/About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero-new">
        <div className="about-hero-overlay">
          <div className="about-hero-content-new">
            <p className="about-eyebrow">ABOUT VELGO</p>

            <h1>
              Redefining
              <br />
              <span>Urban Mobility.</span>
            </h1>

            <p className="about-hero-text">
              We believe the best way to experience a city is on two wheels.
              VelGo makes cycling simple, accessible, and enjoyable for
              everyone.
            </p>

            <Link to="/cycles" className="about-hero-button">
              Explore Our Cycles
            </Link>
          </div>
        </div>
      </section>

      {/* Origin Story / Mission / Vision */}
      <section className="about-story-section">
        <div className="about-container">

          <div className="about-section-heading">
            <p className="about-eyebrow">THE VELGO STORY</p>
            <h2>
              Built for the city.
              <br />
              <span>Made for you.</span>
            </h2>
          </div>

          <div className="about-bento-grid">

            {/* Origin Story */}
            <div className="about-bento-card origin-card">
              <div className="about-card-label">01 / ORIGIN</div>

              <h3>Our Origin Story</h3>

              <p>
                VelGo started with one simple idea: make urban cycling
                accessible to everyone. What began with a few bicycles has
                grown into a modern cycle rental experience designed around
                freedom, convenience, and exploration.
              </p>

              <div className="about-origin-year">
                <strong>2023</strong>
                <span>ESTABLISHED</span>
              </div>
            </div>

            {/* Mission */}
            <div className="about-bento-card mission-card-new">
              <div className="about-card-label">02 / MISSION</div>

              <div className="about-bento-icon">↗</div>

              <h3>Our Mission</h3>

              <p>
                To make every journey easier, healthier, and more sustainable
                by putting reliable bikes within everyone's reach.
              </p>
            </div>

            {/* Vision */}
            <div className="about-bento-card vision-card-new">
              <div className="about-card-label">03 / VISION</div>

              <div className="about-bento-icon">◌</div>

              <h3>Our Vision</h3>

              <p>
                A future where cities are explored freely, one pedal at a
                time, with cleaner streets and happier riders.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="about-stats-section">
        <div className="about-stats-image"></div>

        <div className="about-stats-overlay">
          <div className="about-container">

            <div className="about-stats-heading">
              <p className="about-eyebrow">BY THE NUMBERS</p>
              <h2>VelGo in motion.</h2>
            </div>

            <div className="about-stats-grid">

              <div className="about-stat">
                <strong>50K+</strong>
                <span>RIDES COMPLETED</span>
              </div>

              <div className="about-stat">
                <strong>120+</strong>
                <span>HUB STATIONS</span>
              </div>

              <div className="about-stat">
                <strong>98%</strong>
                <span>HAPPY RIDERS</span>
              </div>

              <div className="about-stat">
                <strong>24/7</strong>
                <span>RIDE ACCESS</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="about-offer-section">
        <div className="about-container">

          <div className="about-offer-heading">
            <div>
              <p className="about-eyebrow">WHAT WE OFFER</p>
              <h2>
                More than
                <br />
                <span>a bike.</span>
              </h2>
            </div>

            <p>
              Everything you need for a better ride, whether you're commuting
              across town or discovering somewhere new.
            </p>
          </div>

          <div className="about-offer-grid">

            <div className="about-offer-card">
              <div className="about-offer-number">01</div>

              <div className="about-offer-icon">🚲</div>

              <h3>Quality Cycles</h3>

              <p>
                From city cruisers to electric bikes, every cycle is carefully
                selected and maintained.
              </p>

              <Link to="/cycles">View cycles →</Link>
            </div>

            <div className="about-offer-card">
              <div className="about-offer-number">02</div>

              <div className="about-offer-icon">⚡</div>

              <h3>Easy Booking</h3>

              <p>
                Find your ride, choose your rental period, and get moving in
                just a few simple steps.
              </p>

              <Link to="/booking">Book a cycle →</Link>
            </div>

            <div className="about-offer-card">
              <div className="about-offer-number">03</div>

              <div className="about-offer-icon">◎</div>

              <h3>Flexible Rentals</h3>

              <p>
                Rent by the hour, day, or week. Choose a plan that fits the
                way you ride.
              </p>

              <Link to="/pricing">View pricing →</Link>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="about-bottom-cta">
        <div className="about-container">
          <p className="about-eyebrow">READY TO RIDE?</p>

          <h2>
            Your next adventure
            <br />
            <span>starts here.</span>
          </h2>

          <Link to="/booking" className="about-cta-button">
            Rent Your Cycle
          </Link>
        </div>
      </section>

    </div>
  );
}

export default About;