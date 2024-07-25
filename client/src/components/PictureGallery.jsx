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
PictureGallery.propTypes = {
  name: PropTypes.number.isRequired,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.number.isRequired,
      photo: PropTypes.number.isRequired,
      alt_artist: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default PictureGallery;
