import { useLoaderData } from "react-router-dom";
import "../style/photo.css";

function Photo() {
  const data = [useLoaderData([])];
  const photo = data[0];

  return (
    <>
      <header>
        <h1>AFAC 971 : {photo.title}</h1>
      </header>
      <section className="photo">
        <h2>
          Cette photo nous est pr&eacute;sent&eacute; par {photo.firstname}{" "}
          {photo.lastname}
        </h2>
        <figure>
          <img src={photo.image} alt={photo.alt_artwork} />
        </figure>
        <article>
          Présentation de la photographie
          <br />
          {photo.description}
        </article>
      </section>
    </>
  );
}
export default Photo;
