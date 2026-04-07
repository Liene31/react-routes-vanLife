import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import { HostVansDetails } from "./pages/host/HostVanDetails.jsx";
import { HostVanInfo } from "./pages/host/HostVanInfo.jsx";
import { HostVanPricing } from "./pages/host/HostVanPricing.jsx";
import { HostVanPhotos } from "./pages/host/HostVanPhotos.jsx";
import { NotFound } from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "vans", element: <Vans /> },
      { path: "vans/:id", element: <VanDetail /> },
      {
        path: "host",
        element: <HostLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "income", element: <Income /> },
          { path: "vans", element: <HostVans /> },
          { path: "reviews", element: <Reviews /> },
          {
            path: "vans/:id",
            element: <HostVansDetails />,
            children: [
              { index: true, element: <HostVanInfo /> },
              { path: "pricing", element: <HostVanPricing /> },
              { path: "photos", element: <HostVanPhotos /> },
            ],
          },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
