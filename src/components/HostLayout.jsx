import { NavLink, Outlet } from "react-router-dom";

export function HostLayout() {
  return (
    <>
      <nav className="nav-links">
        <NavLink to="/host" end>
          Dashboard
        </NavLink>
        <NavLink to="/host/income">Income</NavLink>
        <NavLink to="/host/vans">Vans</NavLink>
        <NavLink to="/host/reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
