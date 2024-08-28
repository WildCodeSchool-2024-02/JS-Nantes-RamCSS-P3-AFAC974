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
import Admin from "./Admin";
import HomeAdmin from "./pages/admin/HomeAdmin";
import AddArtist from "./pages/admin/AddArtist";
import UpdateArtist from "./pages/admin/UpdateArtist";
import AddArtwork from "./pages/admin/AddArtwork";
import UpdateArtwork from "./pages/admin/UpdateArtwork";
import AddUser from "./pages/admin/AddUser";
import UpdateUser from "./pages/admin/UpdateUser";
import User from "./User";
import HomeUser from "./pages/user/HomeUser";
import UserUpdateUser from "./pages/user/UserUpdateUser";

// Fonction pour obtenir les paramètres de l'URL

export const userLoader = async () => {
  const [artwork, artist] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/api/artworks/home/`).then((res) =>
      res.json()
    ),
    fetch(`${import.meta.env.VITE_API_URL}/api/artists/home/`).then((res) =>
      res.json()
    ),
  ]);

  return { artwork, artist };
};

export const artistArtworkLoader = async () => {
  const [artwork, artist] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/api/artworks/rand`).then((res) =>
      res.json()
    ),
    fetch(`${import.meta.env.VITE_API_URL}/api/artists/`).then((res) =>
      res.json()
    ),
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
        loader: () => artistArtworkLoader(),
      },
      {
        path: "photo",
        element: <Photo />,
        loader: ({ request }) => {
          const url = new URL(request.url);
          const id = url.searchParams.get("id");
          return fetch(
            `${import.meta.env.VITE_API_URL}/api/artworks/${id}`
          ).then((response) => response.json());
        },
      },
      {
        path: "artist",
        element: <Artist />,
        loader: () =>
          fetch(`${import.meta.env.VITE_API_URL}/api/artists/`).then(
            (response) => response.json()
          ),
      },
      {
        path: "photographer",
        element: <Photographer />,
        loader: ({ request }) => {
          const url = new URL(request.url);
          const id = url.searchParams.get("id");
          return fetch(
            `${import.meta.env.VITE_API_URL}/api/artists/${id}`
          ).then((response) => response.json());
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
      {
        path: "admin/",
        element: <Admin />,
        children: [
          {
            path: "",
            element: <HomeAdmin />,
          },
          {
            path: "add-artist",
            element: <AddArtist />,
          },
          {
            path: "update-artist",
            element: <UpdateArtist />,
            loader: () =>
              fetch(`${import.meta.env.VITE_API_URL}/api/artists/`).then(
                (response) => response.json()
              ),
          },
          {
            path: "add-artwork",
            element: <AddArtwork />,
            loader: () =>
              fetch(`${import.meta.env.VITE_API_URL}/api/artists/`).then(
                (response) => response.json()
              ),
          },
          {
            path: "update-artwork",
            element: <UpdateArtwork />,
            loader: () =>
              fetch(`${import.meta.env.VITE_API_URL}/api/artworks/`).then(
                (response) => response.json()
              ),
          },
          {
            path: "add-user",
            element: <AddUser />,
          },
          {
            path: "update-user",
            element: <UpdateUser />,
            loader: () =>
              fetch(`${import.meta.env.VITE_API_URL}/api/users/`).then(
                (response) => response.json()
              ),
          },
        ],
      },
      {
        path: "user/",
        element: <User />,
        children: [
          {
            path: "",
            element: <HomeUser />,
          },
          {
            path: "update-user",
            element: <UserUpdateUser />,
          },
        ],
      },
    ],
  },
]);

export default router;
