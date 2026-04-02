import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="nav">
      <Link className="logo" to="/">
        #VANLIFE
      </Link>
      <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  );
}
