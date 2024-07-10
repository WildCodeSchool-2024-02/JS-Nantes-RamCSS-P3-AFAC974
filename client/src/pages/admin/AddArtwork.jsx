import { useRef } from "react";

function AddArtwork() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const photoRef = useRef();
  const altRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>Ajout d&apos;une oeuvre</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {/* Champ pour le titre de la photo */}
          <label htmlFor="title">{}</label>
          <input
            ref={titleRef}
            type="text"
            id="title"
            name="title"
            required
            placeholder="Titre de la photo"
          />
        </div>
        <div>
          {/* Champ pour la description de la photo */}
          <label htmlFor="description">{}</label>
          <textarea
            ref={descriptionRef}
            type="text"
            id="description"
            name="description"
            required
            placeholder="Veuillez entrée la description de l'oeuvre"
          />
        </div>
        <div>
          {/* Champ pour la photo */}
          <label htmlFor="photo">{}</label>
          <input
            ref={photoRef}
            type="file"
            id="photo"
            name="file"
            required
            placeholder="photo"
          />
        </div>
        <div>
          {/* Champ pour l'attribut alt de l'image */}
          <label htmlFor="alt_artist">{}</label>
          <input
            ref={altRef}
            type="text"
            id="alt_artist"
            name="alt_artist"
            required
            placeholder="description de la photo"
          />
        </div>

        <button className="button-form" type="submit">
          Ajout d&apos;un artist
        </button>
      </form>
    </>
  );
}
export default AddArtwork;
