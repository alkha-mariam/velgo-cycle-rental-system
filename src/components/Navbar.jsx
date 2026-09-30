import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          Vel<span>Go</span>
        </NavLink>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/cycles" onClick={closeMenu}>Cycles</NavLink></li>
          <li><NavLink to="/pricing" onClick={closeMenu}>Pricing</NavLink></li>
          <li><NavLink to="/booking" onClick={closeMenu}>Book Cycle</NavLink></li>
          <li><NavLink to="/history" onClick={closeMenu}>History</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          <li className="navbar-cta-mobile">
            <NavLink to="/booking" onClick={closeMenu} className="btn-rent-now">
              Rent Now
            </NavLink>
          </li>
        </ul>

        <NavLink to="/booking" className="btn-rent-now navbar-cta-desktop">
          Rent Now
        </NavLink>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;