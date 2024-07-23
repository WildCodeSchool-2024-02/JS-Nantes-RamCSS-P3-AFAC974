import { NavLink, useLoaderData } from "react-router-dom";

import "../style/gallery.css";

function Gallery() {
  const data = [useLoaderData([])];
  const photo = data[0];

  return (
    <>
      <header>
        <h1>AFAC 974 : Gallerie</h1>
      </header>
      <section>
        <h2>Nos photos des fonds marin d&apos;outre-mer</h2>
        <div className="gallery">
          {photo.map((value) => (
            <article key={value.id}>
              <NavLink to={`../photo?id=${value.id}`}>
                <h3>{value.title}</h3>
                <figure>
                  <img src={value.image} alt={value.alt_artwork} />
                </figure>
              </NavLink>
              <p>
                <NavLink to={`../photographer?id=${value.id_artist}`}>
                  {value.firstname} {value.lastname}
                </NavLink>
              </p>
              <NavLink to={`../photo?id=${value.id}`} className="link-photo">
                plus d&apos;info
              </NavLink>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
export default Gallery;
