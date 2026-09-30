import { Link } from "react-router-dom";
import "../styles/CycleCard.css";

function CycleCard({
  name,
  type,
  price,
  description,
  image,
}) {
  return (
    <article className="cycle-card">

      {/* Image */}
      <div className="cycle-card-image">
        <img
          src={image}
          alt={name}
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/800x500?text=VelGo+Cycle";
          }}
        />
      </div>

      {/* Content */}
      <div className="cycle-card-content">

        <h3 className="cycle-name">
          {name}
        </h3>

        <p className="cycle-type">
          {type}
        </p>

        <p className="cycle-price">
          ₹{price}
          <span> / hour</span>
        </p>

        <p className="cycle-description">
          {description}
        </p>

        <Link
          to="/booking"
          className="btn-rent-now-card"
        >
          Rent Now
        </Link>

      </div>

    </article>
  );
}

export default CycleCard;