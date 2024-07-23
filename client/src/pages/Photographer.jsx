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
    </>
  );
}

export default Photographer;
