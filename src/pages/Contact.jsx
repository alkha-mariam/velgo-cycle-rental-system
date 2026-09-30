import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  // Contact info data
  const contactInfo = [
    {
      id: 1,
      icon: FaMapMarkerAlt,
      title: "Location",
      details: ["123 Cycling Street", "Mumbai, India 400001"]
    },
    {
      id: 2,
      icon: FaPhone,
      title: "Phone",
      details: ["+91 9876543210", "+91 9123456789"]
    },
    {
      id: 3,
      icon: FaEnvelope,
      title: "Email",
      details: ["info@velgo.com", "support@velgo.com"]
    },
    {
      id: 4,
      icon: FaClock,
      title: "Opening Hours",
      details: ["Mon - Fri: 8:00 AM - 8:00 PM", "Sat - Sun: 9:00 AM - 9:00 PM"]
    }
  ];

  // Rental hubs
  const rentalHubs = [
    {
      id: 1,
      name: "Downtown Hub",
      location: "Central Mumbai",
      bikes: "45+ Bikes",
      address: "123 Main Street, Mumbai"
    },
    {
      id: 2,
      name: "Suburbs Hub",
      location: "Outer Mumbai",
      bikes: "32+ Bikes",
      address: "456 Suburb Road, Mumbai"
    },
    {
      id: 3,
      name: "Airport Hub",
      location: "Near Airport",
      bikes: "28+ Bikes",
      address: "789 Airport Lane, Mumbai"
    }
  ];

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all fields!");
      return;
    }

    // Show success message
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container contact-hero-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Send us a message!</p>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Side - Contact Info */}
            <div className="contact-info-side">
              <h2>Contact Information</h2>
              <div className="contact-items">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className="contact-item">
                      <div className="contact-icon">
                        <Icon />
                      </div>
                      <div className="contact-details">
                        <h3>{item.title}</h3>
                        {item.details.map((detail, index) => (
                          <p key={index}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="social-section">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Facebook">f</a>
                  <a href="#" className="social-link" aria-label="Instagram">📷</a>
                  <a href="#" className="social-link" aria-label="Twitter">𝕏</a>
                  <a href="#" className="social-link" aria-label="LinkedIn">in</a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form-side">
              <h2>Send Us a Message</h2>

              {isSubmitted ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting VelGo. We'll get back to you within 24 hours.</p>
                  <div className="success-details">
                    <p><strong>Name:</strong> {formData.fullName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Subject:</strong> {formData.subject}</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message here..."
                      rows="5"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-send">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Rental Hubs Section */}
      <section className="hubs-section">
        <div className="container">
          <h2>Find Our Hubs</h2>
          <p className="hubs-subtitle">Visit one of our rental locations</p>

          <div className="hubs-grid">
            {rentalHubs.map((hub) => (
              <div key={hub.id} className="hub-card">
                <div className="hub-icon">📍</div>
                <h3>{hub.name}</h3>
                <p className="hub-location">{hub.location}</p>
                <p className="hub-bikes">{hub.bikes}</p>
                <p className="hub-address">{hub.address}</p>
                <button className="hub-btn">Get Directions</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="map-section">
        <div className="container">
          <h2>Our Service Area</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <div className="map-icon">🗺️</div>
              <h3>VelGo Service Coverage Map</h3>
              <p>We operate across Mumbai and nearby areas</p>
              <p className="map-description">
                Our premium cycle rental service is available in 15+ locations across the city.
              </p>
              <button className="map-btn">Explore Map</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="faq-quick-section">
        <div className="container">
          <h2>Quick Help</h2>
          <div className="faq-quick-grid">
            <div className="faq-quick-card">
              <div className="faq-quick-icon">❓</div>
              <h3>FAQs</h3>
              <p>Find answers to common questions</p>
              <a href="/pricing" className="quick-link">View FAQs →</a>
            </div>
            <div className="faq-quick-card">
              <div className="faq-quick-icon">📖</div>
              <h3>Blog</h3>
              <p>Read cycling tips and guides</p>
              <a href="#" className="quick-link">Read Blog →</a>
            </div>
            <div className="faq-quick-card">
              <div className="faq-quick-icon">🆘</div>
              <h3>Emergency Support</h3>
              <p>24/7 support for urgent issues</p>
              <a href="#" className="quick-link">Call Now →</a>
            </div>
            <div className="faq-quick-card">
              <div className="faq-quick-icon">📱</div>
              <h3>Mobile App</h3>
              <p>Download our mobile app</p>
              <a href="#" className="quick-link">Download →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;