import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../style/header.css";

function Header() {
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
              <NavLink to="login">CONNECTION</NavLink>
            </li>
            <li>
              <NavLink to="register">INSCRIPTION</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
