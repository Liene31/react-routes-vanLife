import { Link } from "react-router-dom";

export function Home() {
  return (
    <main>
      <section className="home-container">
        <div className="home">
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Link className="btn" to="/vans">
            Find your van
          </Link>
        </div>
      </section>
    </main>
  );
}
