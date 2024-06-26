import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Photo from "./pages/Photo";
import Artist from "./pages/Artist";
import Photographer from "./pages/Photographer";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Fonction pour obtenir les paramètres de l'URL
const getIdFromSearchParams = (searchParams) => searchParams.get("id");
console.info(getIdFromSearchParams);

export const userLoader = async () => {
  const [artwork, artist] = await Promise.all([
    fetch("http://localhost:3310/api/artworks/home/").then((res) => res.json()),
    fetch("http://localhost:3310/api/artists/home/").then((res) => res.json()),
  ]);

  return { artwork, artist };
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: () => userLoader(),
      },
      {
        path: "gallery",
        element: <Gallery />,
        loader: () =>
          fetch("http://localhost:3310/api/artworks/").then((response) =>
            response.json()
          ),
      },
      {
        path: "photo",
        element: <Photo />,
        loader: ({ request }) => {
          const url = new URL(request.url);
          const id = url.searchParams.get("id");
          return fetch(`http://localhost:3310/api/artworks/${id}`).then(
            (response) => response.json()
          );
        },
      },
      {
        path: "artist",
        element: <Artist />,
        loader: () =>
          fetch("http://localhost:3310/api/artists/").then((response) =>
            response.json()
          ),
      },
      {
        path: "photographer",
        element: <Photographer />,
        loader: ({ request }) => {
          const url = new URL(request.url);
          const id = url.searchParams.get("id");
          return fetch(`http://localhost:3310/api/artists/${id}`).then(
            (response) => response.json()
          );
        },
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
