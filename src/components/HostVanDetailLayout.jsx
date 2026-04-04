import { NavLink, Outlet } from "react-router-dom";
import { HostVansDetails } from "../pages/host/HostVansDetails";

export function HostVanDetailLayout() {
  return (
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
  );
}
