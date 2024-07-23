import { useRef, useState } from "react";

import DragAndDrop from "../../components/DragAndDrop";

function AddArtist() {
  const [files, setFiles] = useState([]);
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

    // * Ma première requête fetch va tenter d'ajouter le fichier dans le serveur.
    try {
      const addFileFetch = await fetch(
        `${import.meta.env.VITE_API_URL}/api/upload/artist`,
        {
          method: "POST",
          body: data,
        }
      );

      const fileResponse = await addFileFetch.json();

      // * Si tout s'est bien passé, on ajoute le chemin de l'image dans la base de données
      // * (je prends le deuxième utilisateur pour l'exemple, en utilisant le chemin /api/user/avatar/2).
      // * Dans le cas où on est connecté, on récupère notre propre id utilisateur !

      if (fileResponse) {
        const { filename } = fileResponse;
        const fetchResponse = await fetch(
          `${import.meta.env.VITE_API_URL}/api/artists`,
          {
            method: "POST",
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
      <h1>Ajout d'un artiste</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {/* Champ pour le prénom */}
          <label htmlFor="firstname">{}</label>
          <input
            ref={firstnameRef}
            type="text"
            id="firstname"
            name="firstname"
            required
            placeholder="Prénom"
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
            required
            placeholder="Nom"
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
            required
            placeholder="Veuillez entrée la biographie de l'artiste"
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
            placeholder="Description de la photo de l'artiste"
          />
        </div>
        <button className="button-form" type="submit">
          Ajout d&apos;un artist
        </button>
      </form>
    </>
  );
}
export default AddArtist;
