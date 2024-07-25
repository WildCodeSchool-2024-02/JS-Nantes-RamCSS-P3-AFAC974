import { useLoaderData } from "react-router-dom";
import "../style/artist.css";
import PictureArtist from "../components/PictureArtist";

function Artist() {
  const data = [useLoaderData([])];
  const photographer = data[0];

  return (
    <>
      <header>
        <h1>AFAC 974 : Photographes</h1>
      </header>
      <section>
        <h2>Nos amis les photographes</h2>
        <div className="artist">
          {photographer.map((value) => (
            <PictureArtist key={value.id} value={value} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Artist;
