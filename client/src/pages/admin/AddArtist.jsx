import { useRef } from "react";

function AddArtist() {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const descriptionRef = useRef();
  const photoRef = useRef();
  const altRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
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
              placeholder="Pr&eacute;nom"
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
              placeholder="Prénom"
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
            {/* Champ pour le photo */}
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
