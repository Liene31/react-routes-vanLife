import { NavLink, Outlet } from "react-router-dom";

export function HostLayout() {
  return (
    <>
      <nav className="nav-links">
        <NavLink to="." end>
          Dashboard
        </NavLink>
        <NavLink to="income">Income</NavLink>
        <NavLink to="vans">Vans</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
