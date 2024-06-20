import { NavLink, useLoaderData } from "react-router-dom";

import "../style/gallery.css";

function Gallery() {
  const data = [useLoaderData([])];
  const photo = data[0];

  // const [affichPhoto,SetAffichPhoto]=useState("");

  return (
    <>
      <header>
        <h1>AFAC 974 : Gallerie</h1>
      </header>
      <section>
        <h2>Nos potos des fonds marin d&apos;outre-mer</h2>
        <div className="gallery">
          {photo.map((value) => (
            <article key={value.id}>
              <figure>
                <NavLink to={`../photo?id=${value.id}`}>
                  <img
                    src={`images/photos/photographer${value.id_artist}/thumbnails/${value.image}`}
                    alt=""
                  />
                </NavLink>
              </figure>
              <h3>{value.title}</h3>{" "}
              <p>
                {value.firstname} {value.lastname}
              </p>
              <p className="link-photo">
                <NavLink to={`../photo?id=${value.id}`}>
                  plus d&apos;info
                </NavLink>
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
export default Gallery;
