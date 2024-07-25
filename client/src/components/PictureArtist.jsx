import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function PictureArtist({ value }) {
  return (
    <article key={value.id}>
      <NavLink to={`../photographer?id=${value.id}`}>
        <h3>
          {value.firstname} {value.lastname}
        </h3>
        <figure>
          <img src={value.photo} alt={value.alt_artist} />
        </figure>
      </NavLink>
      <p className="link-photo">
        <NavLink to={`../photographer?id=${value.id}`}>
          plus d&apos;info
        </NavLink>
      </p>
    </article>
  );
}
PictureArtist.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.number.isRequired,
      photo: PropTypes.number.isRequired,
      alt_artist: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default PictureArtist;
