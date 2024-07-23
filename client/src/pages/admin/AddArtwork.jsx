import { useLoaderData } from "react-router-dom";

import FormAddArtwork from "../../components/FormAddArtwork";

function AddArtwork() {
  const dataPhotographer = [useLoaderData([])];
  const photographer = dataPhotographer[0];

  return (
    <>
      <h1>Ajout d&apos;une oeuvre</h1>
      <section className="alignment">
        {photographer.map((value) => (
          <FormAddArtwork key={value.id} value={value} />
        ))}
      </section>
    </>
  );
}
export default AddArtwork;
