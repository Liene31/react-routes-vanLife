import React from "react";
import { Link, useParams } from "react-router-dom";

export function VanDetail() {
  const [van, setVan] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`/api/vans/${id}`).then((res) =>
      res.json().then((data) => setVan(data.vans)),
    );
  }, [id]);

  return (
    <main>
      <section className="van-details-container">
        {van ? (
          <div className="van-details">
            <img src={van.imageUrl} alt={van.name} />
            <i className={`btn van-type-btn ${van.type}`}>{van.type}</i>
            <h1>{van.name}</h1>
            <p className="amount">${van.price}/day</p>
            <p>{van.description}</p>
            <Link className="btn">Rent this van</Link>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </section>
    </main>
  );
}
