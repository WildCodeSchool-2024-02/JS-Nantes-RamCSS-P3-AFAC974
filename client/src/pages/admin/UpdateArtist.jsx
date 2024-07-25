import { useLoaderData } from "react-router-dom";
import { useRef, useState } from "react";
import FormUpdateArtist from "../../components/FormUpdateArtist";

function UpdateArtist() {
  const dataPhotographer = useLoaderData();
  const artistRef = useRef();
  const [id, setId] = useState(0);

  const showartist = () => {
    setId(artistRef.current.value);
  };

  return (
    <>
      <h1>modification d'un artiste </h1>
      <section className="alignment">
        <select ref={artistRef} onChange={showartist}>
          {dataPhotographer.map((value, index) => (
            <option key={value.id} value={index}>
              {value.firstname} {value.lastname}
            </option>
          ))}
        </select>
        <FormUpdateArtist value={dataPhotographer[id]} />
      </section>
    </>
  );
}
export default UpdateArtist;
