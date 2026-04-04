import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Vans } from "./pages/vans/Vans.jsx";
import { VanDetail } from "./pages/vans/VanDetail.jsx";
import { Layout } from "./components/Layout.jsx";
import { HostLayout } from "./components/HostLayout.jsx";
import { Dashboard } from "./pages/host/Dashboard.jsx";
import { Income } from "./pages/host/Income.jsx";
import { Reviews } from "./pages/host/Reviews.jsx";
import { HostVans } from "./pages/host/HostVans.jsx";
import { HostVansDetails } from "./pages/host/HostVansDetails.jsx";
import { HostVanDetailLayout } from "./components/HostVanDetailLayout.jsx";
import { Details } from "./pages/host/vans-details/Details.jsx";
import { Pricing } from "./pages/host/vans-details/Pricing.jsx";
import { Photos } from "./pages/host/vans-details/Photos.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetails />} />
            <Route path="reviews" element={<Reviews />} />

            <Route path="host/vans/:id" element={<HostVanDetailLayout />}>
              <Route index element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
