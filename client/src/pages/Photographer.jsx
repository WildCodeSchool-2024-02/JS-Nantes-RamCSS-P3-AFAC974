import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import PictureGallery from "../components/PictureGallery";
import "../style/photographer.css";

function Photographer() {
  const dataArtist = useLoaderData([]);
  const artist = dataArtist[0];
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/artworks/`)
      .then((response) => response.json())
      .then((data) => setPhoto(data));
  }, []);

  if (photo.length === 0) {
    return "Chargement...";
  }

  const filteredPhoto = photo.filter(
    (filterPhoto) => filterPhoto.id_artist === artist.id
  );

  return (
    <>
      <header>
        <h1>AFAC 971 : photographe</h1>
      </header>
      <section className="photographer">
        <h2>
          {artist.firstname} {artist.lastname}
        </h2>
        <div>
          <figure>
            <img src={artist.photo} alt={artist.alt_artist} />
          </figure>
          <article>
            Présentation de {artist.firstname} {artist.lastname}
            <br />
            {artist.description}
          </article>
        </div>
      </section>
      <div className="gallery">
        {filteredPhoto.map((value) => (
          <PictureGallery key={value.id} value={value} />
        ))}
      </div>
    </>
  );
}

export default Photographer;
