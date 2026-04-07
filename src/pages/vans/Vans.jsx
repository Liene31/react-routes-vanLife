import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans));
  }, []);

  const typeFilter = searchParams.get("type");

  const displayedVans = vans.filter((van) =>
    typeFilter ? van.type === typeFilter : vans,
  );

  const vanElement = displayedVans.map((van) => {
    return (
      <div key={van.id} className="van-card">
        <Link
          to={`${van.id}`}
          state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter,
          }}
          aria-label={`View details for ${van.name},priced at $${van.price} per day`}
        >
          <img src={van.imageUrl} alt={van.name} className="van-img" />
          <div className="van-info">
            <h2>{van.name}</h2>
            <div className="price">
              <p className="amount">{van.price}</p>
              <p className="unit">/day</p>
            </div>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
    );
  });

  function handleFilterChange(key, value) {
    setSearchParams((prevParam) => {
      if (value === null) {
        prevParam.delete(key);
      } else {
        prevParam.set(key, value);
      }

      return prevParam;
    });
  }

  return (
    <main>
      <section className="van-search">
        <h1>Explore our van options</h1>
        <div className="van-search-options">
          <button
            onClick={() => handleFilterChange("type", "simple")}
            className={` btn van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
          >
            Simple
          </button>
          <button
            onClick={() => handleFilterChange("type", "luxury")}
            className={` btn van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
          >
            Luxury
          </button>
          <button
            onClick={() => handleFilterChange("type", "rugged")}
            className={` btn van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
          >
            Rugged
          </button>
          {typeFilter ? (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="btn clear-search"
            >
              Clear
            </button>
          ) : null}
        </div>
      </section>
      <section className="van-cards">{vanElement}</section>
    </main>
  );
}
