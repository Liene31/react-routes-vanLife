import { Link } from "react-router-dom";

export function About() {
  return (
    <main>
      <section className="hero">
        <img
          src="../src/assets/hero-image.png"
          alt="a person sitting on the van"
        />
      </section>
      <section className="intro">
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </section>
      <section className="cta">
        <p>Your destination is waiting.</p>
        <p>Your van is ready.</p>
        <Link className="btn" to="/vans">
          Explore our vans
        </Link>
      </section>
    </main>
  );
}
