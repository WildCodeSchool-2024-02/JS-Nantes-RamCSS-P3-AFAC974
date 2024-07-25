import { useRef, useState } from "react";
import { useRevalidator } from "react-router-dom";
import PropTypes from "prop-types";

import DragAndDrop from "./DragAndDrop";
import FormDelete from "./FormDelete";

function FormUpdateArtist({ value }) {
  const revalidator = useRevalidator();
  const [files, setFiles] = useState([]);
  const [messageRequest, setMessageRequest] = useState("");
  const firstnameRef = useRef();
  const lastnameRef = useRef();
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
        `${import.meta.env.VITE_API_URL}/api/artists/update/${value.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            filename,
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            description: descriptionRef.current.value,
            alt_artist: altRef.current.value,
          }),
        }
      );

      if (!fetchResponse.ok) {
        setMessageRequest(
          "Erreur lors de la mise à jour des informations de l'artiste."
        );
        throw new Error(
          "Erreur lors de la mise à jour des informations de l'artiste."
        );
      } else {
        revalidator.revalidate();
        setMessageRequest(
          "La mise à jour des informations de l'artiste est un succès."
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
        <form onSubmit={handleSubmit}>
          <div>
            {/* Champ pour le prénom */}
            <label htmlFor="firstname">{}</label>
            <input
              ref={firstnameRef}
              type="text"
              id="firstname"
              name="firstname"
              placeholder={value.firstname}
            />
          </div>
          <div>
            {/* Champ pour le nom */}
            <label htmlFor="lastname">{}</label>
            <input
              ref={lastnameRef}
              type="text"
              id="lastname"
              name="lastname"
              placeholder={value.lastname}
            />
          </div>
          <div>
            {/* Champ pour le description */}
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
            <figure className="picture-form">
              <img src={`../${value.photo}`} alt={value.alt_artist} />
            </figure>
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
              placeholder={value.alt_artist}
            />
          </div>

          <button className="button-form" type="submit">
            Modifier un artiste
          </button>
        </form>
        <FormDelete
          item="artist"
          id={value.id}
          setMessageRequest={setMessageRequest}
        />
      </article>
    </>
  );
}

FormUpdateArtist.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      alt_artist: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FormUpdateArtist;
