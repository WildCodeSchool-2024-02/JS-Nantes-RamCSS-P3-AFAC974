import { useLoaderData } from "react-router-dom";

import FormUpdateArtist from "../../components/FormUpdateArtist";

function UpdateArtist() {
  const dataPhotographer = useLoaderData();
  const photographer = dataPhotographer[0];
  return (
    <>
      <h1>modification d'un artiste </h1>
      <section className="alignment">
        {photographer.map((value) => (
          <FormUpdateArtist key={value.id} value={value} />
        ))}
      </section>
    </>
  );
};
export default UpdateArtist;
