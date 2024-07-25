import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import PictureGallery from "../components/PictureGallery";
import "../style/gallery.css";

function Gallery() {
  const data = useLoaderData();
  const photographer = data.artist;
  const photo = data.artwork;
  const [id, setId] = useState("0");
  const filteredPhoto = photo.filter(
    (filterPhoto) => `${filterPhoto.id_artist}` === id
  );

  return (
    <>
      <header>
        <h1>AFAC 974 : Gallerie</h1>
      </header>
      <section>
        <h2>Nos photos des fonds marin d&apos;outre-mer</h2>
        <select
          onChange={(e) => {
            setId(e.target.value);
          }}
          className="change-artist"
        >
          <option value="0">
            Selectionnez l'artiste pour voir ses oeuvres
          </option>
          {photographer.map((value) => (
            <option key={value.id} value={value.id}>
              {value.firstname} {value.lastname} :
            </option>
          ))}
        </select>
        <div className="gallery">
          {id === "0"
            ? photo.map((value) => (
                <PictureGallery key={value.id} value={value} name={1} />
              ))
            : filteredPhoto.map((value) => (
                <PictureGallery key={value.id} value={value} />
              ))}
        </div>
      </section>
    </>
  );
}
export default Gallery;
