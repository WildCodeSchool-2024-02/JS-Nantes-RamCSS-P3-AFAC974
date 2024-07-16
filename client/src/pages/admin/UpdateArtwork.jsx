import { useLoaderData } from "react-router-dom";
import FormUpdateArtwork from "../../components/FormUpdateArtwork";

function UpdateArtwork() {
  const dataPhotographer = useLoaderData();

  return (
    <>
      <h1>Modification d&apos;une oeuvre</h1>
      <section className="alignment">
        {dataPhotographer.map((value) => (
          <FormUpdateArtwork key={value.id} value={value} />
        ))}
      </section>
    </>
  );
}
export default UpdateArtwork;
