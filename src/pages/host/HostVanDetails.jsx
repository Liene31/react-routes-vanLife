import { NavLink, Link, Outlet } from "react-router-dom";

export function HostVansDetails() {
  return (
    <>
      {/* Relative path indicates to go path back not to go back to parent */}
      {/* If it's just .. it would go back to /host not to the /host/vans */}
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-card">
        <img
          src="https://img.freepik.com/vecteurs-premium/vehicule-transport-dessin-anime-isole-fourgon-retro-mouvement_1263357-22873.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
        />
        <div className="">
          <i className="btn van-type-btn simple">simple</i>
          <h2>Modest Explorer</h2>
          <p>$60/day</p>
        </div>
      </div>
      <>
        <nav className="nav-links">
          <NavLink to="/host/vans/:id" end>
            Details
          </NavLink>
          <NavLink to="/host/vans/:id/pricing">Pricing</NavLink>
          <NavLink to="/host/vans/:id/photos">Photos</NavLink>
        </nav>
        <Outlet />
      </>
    </>
  );
}
