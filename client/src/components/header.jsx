import { NavLink } from "react-router-dom";
import logonavbar from "../assets/images/logos/logonavbar.png";
import "../style/header.css";

function header() {
  return (
    <header>
      <nav>
        <NavLink to="./">
          <img src={logonavbar} alt="Logo" />
        </NavLink>
        <ul>
          <li>
            <NavLink to="gallery.html">GALLERIE</NavLink>
          </li>
          <li>
            <NavLink to="artist.html">ARTISTE</NavLink>
          </li>
          <li>
            <NavLink to="about.html">À&nbsp;PROPOS</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default header;
