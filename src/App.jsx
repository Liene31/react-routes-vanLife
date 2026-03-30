import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Components/Home.jsx";
import { About } from "./Components/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <p className="logo">#VANLIFE</p>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
