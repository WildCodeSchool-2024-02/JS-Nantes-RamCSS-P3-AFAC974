import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function PictureGallery({ value, name }) {
  return (
    <article key={value.id}>
      <NavLink to={`../photo?id=${value.id}`}>
        <h3>{value.title}</h3>
        <figure>
          <img src={value.image} alt={value.alt_artwork} />
        </figure>
      </NavLink>
      <p>
        <NavLink to={`../photographer?id=${value.id_artist}`}>
          {name && `${value.firstname} ${value.lastname}`}
        </NavLink>
      </p>
      <NavLink to={`../photo?id=${value.id}`} className="link-photo">
        plus d&apos;info
      </NavLink>
    </article>
  );
}

PictureGallery.defaultProps = {
  name: "", // Valeur par défaut si `name` n'est pas fourni
};

PictureGallery.propTypes = {
  name: PropTypes.string,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      alt_artist: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default PictureGallery;
