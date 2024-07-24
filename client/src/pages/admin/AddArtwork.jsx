import { useLoaderData } from "react-router-dom";
import { useRef, useState } from "react";

import FormAddArtwork from "../../components/FormAddArtwork";

function AddArtwork() {
  const dataPhotographer = useLoaderData();
  const artistRef = useRef();
  const [id, setId] = useState(0);

  const showartist = () => {
    setId(artistRef.current.value);
  };

  return (
    <>
      <h1>Ajout d&apos;une œuvre</h1>

      <section className="alignment">
        <select ref={artistRef} onChange={showartist}>
          {dataPhotographer.map((value, index) => (
            <option key={value.id} value={index}>
              {value.firstname} {value.firstname}
            </option>
          ))}
        </select>
        <FormAddArtwork value={dataPhotographer[id]} />
      </section>
    </>
  );
}
export default AddArtwork;
