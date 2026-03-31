import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Vans } from "./pages/Vans.jsx";
import { VanDetail } from "./pages/VanDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link className="logo" to="/">
          #VANLIFE
        </Link>
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
