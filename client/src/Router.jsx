import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Photo from "./pages/Photo";
import Artist from "./pages/Artist";
import Photographer from "./pages/Photographer";
import About from "./pages/About";

const queryParameters = new URLSearchParams(window.location.search);
const id = queryParameters.get("id");

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
        loader: () =>
          fetch(" http://localhost:3310/api/photos/ ").then((response) =>
            response.json()
          ),
      },
      {
        path: "photo",
        element: <Photo />,
        loader: () =>
          fetch(` http://localhost:3310/api/photos/${id} `).then((response) =>
            response.json()
          ),
      },

      {
        path: "artist",
        element: <Artist />,
        loader: () =>
          fetch(" http://localhost:3310/api/artists/ ").then((response) =>
            response.json()
          ),
      },
      {
        path: "photographer",
        element: <Photographer />,
        loader: () =>
          fetch(` http://localhost:3310/api/artists/${id} `).then((response) =>
            response.json()
          ),
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
