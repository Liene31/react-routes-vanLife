import { NavLink, Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function HostVansDetails() {
  const [currentVan, setCurrentVan] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans[0]));
  }, []);

  return (
    <>
      {/* Relative path indicates to go path back not to go back to parent */}
      {/* If it's just .. it would go back to /host not to the /host/vans */}
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      {currentVan ? (
        <div className="host-van-card">
          <img src={currentVan.imageUrl} alt={`Image of ${currentVan.name}`} />
          <div className="">
            <i className="btn van-type-btn simple">simple</i>
            <h2>{currentVan.name}</h2>
            <p>{`$ ${currentVan.price}/day`}</p>
          </div>
        </div>
      ) : (
        <h2>Loading</h2>
      )}

      <>
        <nav className="nav-links">
          <NavLink to="." end>
            Details
          </NavLink>
          <NavLink to="pricing">Pricing</NavLink>
          <NavLink to="photos">Photos</NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </>
    </>
  );
}
