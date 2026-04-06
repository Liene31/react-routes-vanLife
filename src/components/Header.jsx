import { NavLink, Link } from "react-router-dom";

export function Header() {
  return (
    <header className="nav">
      <Link className="logo" to="/">
        #VANLIFE
      </Link>
      <nav className="nav-links">
        <NavLink to="host">Host</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="vans">Vans</NavLink>
      </nav>
    </header>
  );
}
