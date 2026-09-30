import { Link } from "react-router-dom";
import "../styles/Pricing.css";

function Pricing() {
    const plans = [
        {
            id: 1,
            name: "Hourly",
            price: "₹100",
            priceValue: 100,
            duration: "/ hour",
            description:
                "Perfect for quick rides, errands, and short adventures.",
            features: [
                "Quality cycle",
                "Helmet included",
                "Free maintenance support",
                "Easy booking",
            ],
        },

        {
            id: 2,
            name: "Half Day",
            price: "₹350",
            priceValue: 350,
            duration: "/ 6 hours",
            description:
                "The perfect balance for exploring the city at your own pace.",
            popular: true,
            features: [
                "Quality cycle",
                "Helmet included",
                "Free maintenance support",
                "Easy booking",
            ],
        },

        {
            id: 3,
            name: "Full Day",
            price: "₹600",
            priceValue: 600,
            duration: "/ day",
            description:
                "From sunrise to sunset, enjoy a full day on two wheels.",
            features: [
                "Quality cycle",
                "Helmet included",
                "Free maintenance support",
                "Easy booking",
            ],
        },

        {
            id: 4,
            name: "Weekly",
            price: "₹2500",
            priceValue: 2500,
            duration: "/ week",
            description:
                "For longer adventures, commutes, and extended exploration.",
            features: [
                "Quality cycle",
                "Helmet included",
                "Free maintenance support",
                "Easy booking",
            ],
        },
    ];

    return (
        <main className="pricing">

            {/* =========================
                HERO SECTION
            ========================== */}

            <section className="pricing-hero">

                <div className="pricing-hero-overlay"></div>

                <div className="pricing-hero-content">

                    <span className="pricing-label">
                        VELOGO RENTAL PLANS
                    </span>

                    <h1>
                        Simple, Transparent Pricing
                    </h1>

                    <p>
                        Choose the plan that fits your ride.
                        <br />
                        No hidden fees, just pure momentum.
                    </p>

                </div>

            </section>


            {/* =========================
                PRICING SECTION
            ========================== */}

            <section className="pricing-section">

                <div className="pricing-container">

                    <div className="pricing-section-heading">

                        <span>
                            CHOOSE YOUR PLAN
                        </span>

                        <h2>
                            Ride more. Worry less.
                        </h2>

                        <p>
                            Every VelGo plan includes a quality-maintained
                            cycle, helmet, and support when you need it.
                        </p>

                    </div>


                    {/* PRICING CARDS */}

                    <div className="pricing-grid">

                        {plans.map((plan) => (

                            <div
                                key={plan.id}
                                className={`pricing-card ${
                                    plan.popular ? "popular" : ""
                                }`}
                            >

                                {/* POPULAR BADGE */}

                                {plan.popular && (
                                    <div className="popular-badge">
                                        MOST POPULAR
                                    </div>
                                )}


                                {/* CARD HEADER */}

                                <div className="pricing-card-header">

                                    <h3>
                                        {plan.name}
                                    </h3>

                                    <p className="pricing-description">
                                        {plan.description}
                                    </p>

                                </div>


                                {/* PRICE */}

                                <div className="pricing-price">

                                    <span className="price">
                                        {plan.price}
                                    </span>

                                    <span className="duration">
                                        {plan.duration}
                                    </span>

                                </div>


                                {/* FEATURES */}

                                <div className="pricing-features">

                                    <p className="features-title">
                                        INCLUDED
                                    </p>

                                    <ul>

                                        {plan.features.map(
                                            (feature, index) => (

                                                <li key={index}>

                                                    <span className="check-icon">
                                                        ✓
                                                    </span>

                                                    {feature}

                                                </li>

                                            )
                                        )}

                                    </ul>

                                </div>


                                {/* RENT THIS PLAN */}

                                <Link
                                    to="/booking"
                                    state={{
                                        plan: plan.name,
                                        price: plan.price,
                                        priceValue: plan.priceValue,
                                        duration: plan.duration
                                    }}
                                    className={
                                        plan.popular
                                            ? "pricing-button pricing-button-primary"
                                            : "pricing-button"
                                    }
                                >
                                    Rent This Plan
                                </Link>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================
                BOTTOM INFO
            ========================== */}

            <section className="pricing-info">

                <div className="pricing-info-container">

                    <div className="pricing-info-item">

                        <span className="info-icon">
                            ✓
                        </span>

                        <div>

                            <h3>
                                No Hidden Fees
                            </h3>

                            <p>
                                What you see is what you pay.
                            </p>

                        </div>

                    </div>


                    <div className="pricing-info-item">

                        <span className="info-icon">
                            ⚙
                        </span>

                        <div>

                            <h3>
                                Well Maintained
                            </h3>

                            <p>
                                Every cycle is checked before your ride.
                            </p>

                        </div>

                    </div>


                    <div className="pricing-info-item">

                        <span className="info-icon">
                            🛡
                        </span>

                        <div>

                            <h3>
                                Safety First
                            </h3>

                            <p>
                                Helmets and safety support included.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================
                CTA
            ========================== */}

            <section className="pricing-cta">

                <div className="pricing-cta-content">

                    <span>
                        READY TO RIDE?
                    </span>

                    <h2>
                        Your next adventure starts here.
                    </h2>

                    <p>
                        Pick a plan, choose your cycle, and hit the road.
                    </p>

                    <Link
                        to="/booking"
                        className="pricing-cta-button"
                    >
                        Book Your Cycle
                    </Link>

                </div>

            </section>

        </main>
    );
}

export default Pricing;