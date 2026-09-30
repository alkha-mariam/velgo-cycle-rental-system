import { Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/cycles", label: "Browse Cycles" },
    { path: "/booking", label: "Book a Cycle" },
    { path: "/pricing", label: "View Pricing" },
    { path: "/about", label: "About VelGo" },
    { path: "/contact", label: "Contact Us" }
  ];

  return (
    <div className="not-found">
      <section className="not-found-content">
        <div className="container">
          <div className="not-found-wrapper">
            <div className="error-visual">
              <div className="error-code">404</div>
              <div className="error-icon">🚴</div>
            </div>

            <div className="error-text">
              <h1>Oops! Page Not Found</h1>
              <p>The page you're looking for has taken a detour.</p>
              <p className="error-description">
                Don't worry, let's get you back on track. The page might have been moved or deleted.
              </p>

              <Link to="/" className="btn-home">
                Go Back Home
              </Link>
            </div>

            <div className="quick-navigation">
              <h2>Quick Navigation</h2>
              <div className="quick-links-grid">
                {quickLinks.map((link, index) => (
                  <Link key={index} to={link.path} className="quick-link-item">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="error-help">
              <h3>Need Help?</h3>
              <p>
                If you believe this is a mistake, please{" "}
                <Link to="/contact" className="contact-link">
                  contact our support team
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;