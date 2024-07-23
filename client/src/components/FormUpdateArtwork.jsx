import { useRef, useState } from "react";
import { useRevalidator } from "react-router-dom";
import PropTypes from "prop-types";

import DragAndDrop from "./DragAndDrop";
import FormDelete from "./FormDelete";

function FormUpdateArtwork({ value }) {
  const revalidator = useRevalidator();
  const [files, setFiles] = useState([]);
  const [messageRequest, setMessageRequest] = useState("");
  const titleRef = useRef();
  const descriptionRef = useRef();
  const photoRef = useRef();
  const altRef = useRef();
  const handleDrop = (e) => {
    e.preventDefault();

    setFiles(Array.from(e.dataTransfer.files));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();

    data.append("file", files[0]);

    try {
      // Première requête pour ajouter le fichier
      const addFileFetch = await fetch(
        `${import.meta.env.VITE_API_URL}/api/upload/artwork`,
        {
          method: "POST",
          body: data,
        }
      );

      const fileResponse = await addFileFetch.json();

      const { filename } = fileResponse;
      // Seconde requête pour mettre à jour les informations de l'œuvre

      const fetchResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/api/artworks/update/${value.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            filename,
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            alt_artwork: altRef.current.value,
            id_artist: value.id_artist,
          }),
        }
      );

      if (!fetchResponse.ok) {
        setMessageRequest(
          "Erreur lors de la mise à jour des informations de l'œuvre."
        );
        throw new Error(
          "Erreur lors de la mise à jour des informations de l'œuvre."
        );
      } else {
        revalidator.revalidate();
        setMessageRequest(
          "La mise à jour des informations de l'œuvre est un succès."
        );
      }
      const updateResponse = await fetchResponse.json();
      console.warn(updateResponse);
    } catch (err) {
      console.error("Une erreur s'est produite :", err);
    }
    // return null;
  };

  return (
    <>
      <p className="errormessage">{messageRequest}</p>
      <article className="form-admin">
        <h2 className="h2-admin">
          {value.firstname} {value.lastname}
        </h2>
        <figure className="picture-form">
          <img src={`../${value.photo}`} alt={value.alt_artist} />
        </figure>
        <form onSubmit={handleSubmit}>
          <div>
            {/* Champ pour le titre de la photo */}
            <label htmlFor="title">{}</label>
            <input
              ref={titleRef}
              type="text"
              id="title"
              name="title"
              placeholder={value.title}
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
              placeholder={value.description}
            />
          </div>
          <div>
            <figure className="artwork">
              <img src={`../${value.image}`} alt={value.alt_artwork} />
            </figure>
            {/* Champ pour la photo */}
            <DragAndDrop
              files={files}
              setFiles={setFiles}
              handleDrop={handleDrop}
              ref={photoRef}
            />
          </div>
          <div>
            {/* Champ pour l'attribut alt de l'image */}
            <label htmlFor="alt_artist">{}</label>
            <input
              ref={altRef}
              type="text"
              id="alt_artwork"
              name="alt_artwork"
              placeholder={value.alt_artwork}
            />
          </div>

          <button className="button-form" type="submit">
            Ajout d&apos;une &oelig;uvre
          </button>
        </form>
        <FormDelete
          setMessageRequest={setMessageRequest}
          item="artwork"
          id={value.id}
        />
      </article>
    </>
  );
}

FormUpdateArtwork.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.number.isRequired,
      photo: PropTypes.number.isRequired,
      alt_artist: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FormUpdateArtwork;
