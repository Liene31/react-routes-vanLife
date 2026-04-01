import React from "react";
import { Link, useParams } from "react-router-dom";

export function VanDetail() {
  const [vans, setVans] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`/api/vans/${id}`).then((res) =>
      res.json().then((data) => setVans(data.vans)),
    );
  }, [id]);

  return (
    <main>
      <section>
        <img src="" alt="" />
        <button>Simple</button>
        <h1>Modest Explorer</h1>
        <p>$60/day</p>
        <p>
          The Modest Explorer is a van designed to get you out of the house and
          into nature. This beauty is equipped with solar panels, a composting
          toilet, a water tank and kitchenette. The idea is that you can pack up
          your home and escape for a weekend or even longer!
        </p>
        <Link className="btn">Rent this van</Link>
      </section>
    </main>
  );
}
