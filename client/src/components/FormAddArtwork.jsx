import { useRef, useState } from "react";
import PropTypes from "prop-types";
import DragAndDrop from "./DragAndDrop";

function FormAddArtwork({ value }) {
  const [files, setFiles] = useState([]);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const photoRef = useRef();
  const altRef = useRef();
  const idArtistRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    setFiles(Array.from(e.dataTransfer.files));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("file", files[0]);

    // * Ma première requête fetch va tenter d'ajouter le fichier dans le serveur.
    try {
      const addFileFetch = await fetch(
        `${import.meta.env.VITE_API_URL}/api/upload/artwork`,
        {
          method: "POST",
          body: data,
        }
      );

      const fileResponse = await addFileFetch.json();

      // * Si tout s'est bien passé, on ajoute le chemin de l'image dans la base de données

      if (fileResponse) {
        const { filename } = fileResponse;
        const fetchResponse = await fetch(
          `${import.meta.env.VITE_API_URL}/api/artworks`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              filename,
              title: titleRef.current.value,
              description: descriptionRef.current.value,
              alt_artist: altRef.current.value,
              id_artist: idArtistRef.current.value,
            }),
          }
        );

        console.warn(fetchResponse);
        return null;
      }
    } catch (err) {
      return err;
    }
    return null;
  };

  return (
    <>
      {}
      <article>
        <h2 className="h2-admin">
          {value.firstname} {value.lastname}
        </h2>
        <figure className="picture-form">
          <img src={`../${value.photo}`} alt={value.alt_artist} />
        </figure>
        <form onSubmit={handleSubmit} className="form-admin">
          <div>
            <input
              ref={idArtistRef}
              type="hidden"
              id="id_artist"
              name="id_artist"
              value={value.id}
            />
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
            <DragAndDrop
              files={files}
              setFiles={setFiles}
              handleDrop={handleDrop}
              photoRef={photoRef}
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
            Ajout d&apos;une &oelig;vre
          </button>
        </form>
      </article>
    </>
  );
}

FormAddArtwork.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.number.isRequired,
      photo: PropTypes.number.isRequired,
      alt_artist: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FormAddArtwork;
