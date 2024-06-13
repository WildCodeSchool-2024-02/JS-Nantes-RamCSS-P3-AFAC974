import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Photography from "./pages/Photography";
import Artist from "./pages/Artist";
import Photographer from "./pages/Photographer";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "photography",
        element: <Photography />,
      },

      {
        path: "artist",
        element: <Artist />,
      },
      {
        path: "photographer",
        element: <Photographer />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
