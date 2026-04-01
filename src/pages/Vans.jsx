import React from "react";
import { Link } from "react-router-dom";

export function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElement = vans.map((van) => {
    return (
      <div key={van.id} className="van-card">
        <Link
          to={`/vans/${van.id}`}
          aria-label={`View details for ${van.name},priced at $${van.price} per day`}
        >
          <img src={van.imageUrl} alt={van.name} className="van-img" />
          <div className="van-info">
            <h2>{van.name}</h2>
            <div className="price">
              <p className="amount">${van.price}</p>
              <p className="unit">/day</p>
            </div>
          </div>
          <i className={`btn van-type-btn ${van.type}`}>{van.type}</i>
        </Link>
      </div>
    );
  });

  return (
    <main>
      <section className="van-search">
        <h1>Explore our van options</h1>
        <div className="van-search-options">
          <button className="btn van-search-option">Simple</button>
          <button className="btn van-search-option">Luxury</button>
          <button className="btn van-search-option">Rugged</button>
        </div>
      </section>
      <section className="van-cards">{vanElement}</section>
    </main>
  );
}
