import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">
            Vel<span>Go</span>
          </h2>
          <p>Ride freely. Explore endlessly.</p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cycles">Cycles</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/booking">Book Cycle</Link></li>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li>Hourly Rental</li>
            <li>Daily Rental</li>
            <li>Weekly Rental</li>
            <li>Electric Bikes</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 VelGo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;