import { useLoaderData } from "react-router-dom";
import "../style/photographer.css";

function Photographer() {
  const data = [useLoaderData([])];
  const artist = data[0];

  return (
    <>
      <header>
        <h1>AFAC 971 : photographe</h1>
      </header>
      <section className="photographer">
        <h2>
          {artist.firstname} {artist.lastname}
        </h2>
        <figure>
          <img
            src={`images/photos/photographer${artist.id_artist}/thumbnails/photographer.jpg`}
            alt=""
          />
        </figure>
        <article>
          Présentation de {artist.firstname} {artist.lastname}
          <br />
          {artist.description}
        </article>
      </section>
    </>
  );
}

export default Photographer;
