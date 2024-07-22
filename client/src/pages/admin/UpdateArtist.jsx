import { useLoaderData } from "react-router-dom";

import FormUpdateArtist from "../../components/FormUpdateArtist";

function UpdateArtist() {
  const dataPhotographer = useLoaderData();

  return (
    <>
      <h1>modification d'un artiste </h1>
      <section className="alignment">
        {dataPhotographer.map((value) => (
          <FormUpdateArtist key={value.id} value={value} />
        ))}
      </section>
    </>
  );
}
export default UpdateArtist;
