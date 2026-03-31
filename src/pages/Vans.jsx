export function Vans() {
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
      <section className="van-cards">
        <div className="van-card">
          <img
            src="../src/assets/hero-image.png"
            alt="vans"
            className="van-img"
          />
          <div className="van-info">
            <h2>Modest Explorer</h2>
            <div className="price">
              <p className="amount">$60</p>
              <p className="unit">/day</p>
            </div>
          </div>
          <button className="btn van-type-btn">Simple</button>
        </div>
      </section>
    </main>
  );
}
