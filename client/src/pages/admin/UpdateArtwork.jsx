import { useLoaderData } from "react-router-dom";
import { useRef, useState } from "react";
import FormUpdateArtwork from "../../components/FormUpdateArtwork";

function UpdateArtwork() {
  const dataArtworks = useLoaderData();
  const artworkRef = useRef();
  const [id, setId] = useState(0);

  const showartwork = () => {
    setId(artworkRef.current.value);
  };

  return (
    <>
      <h1>modification d'une œuvre</h1>
      <section className="alignment">
        <select ref={artworkRef} onChange={showartwork}>
          {dataArtworks.map((value, index) => (
            <option key={value.id} value={index}>
              {value.firstname} {value.lastname} : {value.title}
            </option>
          ))}
        </select>
        <FormUpdateArtwork value={dataArtworks[id]} />
      </section>
    </>
  );
}
export default UpdateArtwork;
