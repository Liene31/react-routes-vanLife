import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  console.log(vans);

  const vanListElements = vans.map((van) => (
    <Link key={van.id} className="host-van-card" to={`/host/vans/${van.id}`}>
      <img src={van.imageUrl} alt={`${van.name} image`} />
      <div className="host-van-info">
        <h2>{van.name}</h2>
        <p>${van.price}/day</p>
      </div>
    </Link>
  ));

  return (
    <section className="host-van-list">
      <h1>Your listed vans</h1>
      <div className="host-van-cards">
        {vans.length > 0 ? vanListElements : <h3>Loading</h3>}
      </div>
    </section>
  );
}
