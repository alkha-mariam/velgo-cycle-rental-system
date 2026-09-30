import { useState } from "react";
import CycleCard from "../components/CycleCard";
import "../styles/Cycles.css";

function Cycles() {
  const allCycles = [
    {
      id: 1,
      name: "Trailblazer Pro",
      type: "Mountain Bike",
      category: "Mountain",
      price: 100,
      description: "Perfect for off-road adventures and rugged terrain.",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
    },
    {
      id: 2,
      name: "Peak Rider",
      type: "Mountain Bike",
      category: "Mountain",
      price: 110,
      description: "Built for steep climbs and technical trails.",
      image:
        "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80",
    },
    {
      id: 3,
      name: "City Cruiser",
      type: "Hybrid Bike",
      category: "Hybrid",
      price: 80,
      description: "Ideal for smooth city rides and casual commuting.",
      image:
        "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=800&q=80",
    },
    {
      id: 4,
      name: "Urban Explorer",
      type: "Hybrid Bike",
      category: "Hybrid",
      price: 85,
      description: "Versatile bike for both city and light trails.",
      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80",
    },
    {
      id: 5,
      name: "Velocity X",
      type: "Road Bike",
      category: "Road",
      price: 120,
      description: "Built for speed and long-distance rides.",
      image:
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&q=80",
    },
    {
      id: 6,
      name: "Speed Demon",
      type: "Road Bike",
      category: "Road",
      price: 130,
      description: "Lightweight frame for maximum performance.",
      image:
        "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80",
    },
    {
      id: 7,
      name: "VoltRide",
      type: "Electric Bike",
      category: "Electric",
      price: 150,
      description: "Eco-friendly with powerful motor assistance.",
      image:
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80",
    },
    {
      id: 8,
      name: "E-Cruiser Pro",
      type: "Electric Bike",
      category: "Electric",
      price: 160,
      description: "Premium electric bike with extended battery range.",
      image:
        "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=800&q=80",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCycles =
    selectedCategory === "All"
      ? allCycles
      : allCycles.filter(
          (cycle) => cycle.category === selectedCategory
        );

  return (
    <main className="cycles">

      {/* HERO */}
      <section className="cycles-hero">
        <div className="cycles-hero-content">
          <p className="hero-label">VELGO BIKE RENTALS</p>

          <h1>Our Fleet</h1>

          <p>
            Choose the perfect ride for your next adventure.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="cycles-filter">
        <div className="container">

          <h2>Find Your Perfect Ride</h2>

          <div className="filter-buttons">

            {["All", "Mountain", "Road", "Hybrid", "Electric"].map(
              (category) => (
                <button
                  key={category}
                  className={`filter-btn ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              )
            )}

          </div>
        </div>
      </section>

      {/* CYCLES */}
      <section className="cycles-grid-section">
        <div className="container">

          <div className="cycles-heading">
            <div>
              <h2>
                {selectedCategory === "All"
                  ? "All Cycles"
                  : `${selectedCategory} Bikes`}
              </h2>

              <p>
                Explore our collection of quality-maintained cycles.
              </p>
            </div>

            <span className="cycles-count">
              {filteredCycles.length}{" "}
              {filteredCycles.length === 1 ? "cycle" : "cycles"}
            </span>
          </div>

          <div className="cycles-grid">

            {filteredCycles.map((cycle) => (
              <CycleCard
                key={cycle.id}
                name={cycle.name}
                type={cycle.type}
                price={cycle.price}
                description={cycle.description}
                image={cycle.image}
              />
            ))}

          </div>

          {filteredCycles.length === 0 && (
            <div className="no-cycles">
              <h3>No cycles found</h3>
              <p>
                Try selecting another category.
              </p>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}

export default Cycles;