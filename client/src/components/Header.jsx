import { NavLink } from "react-router-dom";

import { useState, useContext } from "react";

import { UserConnectionContext } from "../contexts/UserConnectionProvider";
import "../style/header.css";

function Header() {
  const { user } = useContext(UserConnectionContext);

  const [open, setOpen] = useState(0);

  const openMenu = () => {
    if (open === 0) {
      setOpen(1);
      document.querySelector("#vu-menu").style.display = "flex";
    }
    if (open === 1) {
      setOpen(0);
      document.querySelector("#vu-menu").style.display = "none";
    }
  };
  let menuBurger = "";
  if (open === 0) {
    menuBurger = "images/images/menu-burger.png";
  } else {
    menuBurger = "images/images/menu-burger1.png";
  }
  return (
    <header>
      <nav>
        <NavLink to="./">
          <img src="images/logos/logonavbar.png" alt="Logo" />
        </NavLink>
        <div>
          <button id="img-menu" type="submit" onClick={openMenu}>
            <img src={menuBurger} alt="ouvrir le menu" />
          </button>
          <ul id="vu-menu">
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
              <NavLink to="login">
                {user.user.is_admin === "" ? "CONNEXION" : "DÉCONNEXION"}
              </NavLink>
            </li>
            {user.user.is_admin === "" && (
              <li>
                <NavLink to="register">INSCRIPTION</NavLink>
              </li>
            )}
            {user.user.is_admin === 1 && (
              <li>
                <NavLink to="admin">ADMIN</NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
