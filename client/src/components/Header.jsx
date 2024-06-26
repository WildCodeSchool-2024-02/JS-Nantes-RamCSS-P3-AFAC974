import { NavLink } from "react-router-dom";
import "../style/header.css";

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="./">
          <img src="images/logos/logonavbar.png" alt="Logo" />
        </NavLink>
        <ul>
          <li>
            <NavLink to="gallery">GALLERIE</NavLink>
          </li>
          <li>
            <NavLink to="artist">ARTISTE</NavLink>
          </li>
          <li>
            <NavLink to="about">&Agrave;&nbsp;PROPOS</NavLink>
          </li>
          <li>
            <NavLink to="login">CONNECTION</NavLink>
          </li>
          <li>
            <NavLink to="register">INSCRIPTION</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
