import { NavLink } from "react-router-dom";

import { useState, useContext } from "react";

import { UserConnectionContext } from "../contexts/UserConnectionProvider";
import "../style/header.css";

function Header() {
  const { user, SetUser } = useContext(UserConnectionContext);

  const [open, setOpen] = useState(0);
  const [menuBurger, setMemuBurger] = useState(
    "../images/images/menu-burger.png"
  );
  const openMenu = () => {
    if (open === 0) {
      setOpen(1);
      document.querySelector("#vu-menu").style.display = "flex";
      setMemuBurger("../images/images/menu-burger1.png");
    }
    if (open === 1) {
      setOpen(0);
      document.querySelector("#vu-menu").style.display = "none";
      setMemuBurger("../images/images/menu-burger.png");
    }
  };
  const disconnect = () => {
    SetUser({
      token: "",
      user: { id: "", firstname: "", lastname: "", is_admin: "" },
    });
  };
  return (
    <>
      <header>
        <nav>
          <NavLink to="./">
            <img
              className="logo1"
              src="../images/logos/logonavbar.png"
              alt="Logo"
            />
          </NavLink>
          <div>
            <button id="img-menu" type="submit" onClick={openMenu}>
              <img src={menuBurger} alt="ouvrir le menu" />
            </button>
            <ul id="vu-menu">
              <li>
                <NavLink to="./" onClick={openMenu}>
                  ACCUEIL
                </NavLink>
              </li>
              <li>
                <NavLink to="gallery" onClick={openMenu}>
                  GALLERIE
                </NavLink>
              </li>
              <li>
                <NavLink to="artist" onClick={openMenu}>
                  ARTISTE
                </NavLink>
              </li>
              <li>
                <NavLink to="about" onClick={openMenu}>
                  &Agrave;&nbsp;PROPOS
                </NavLink>
              </li>
              <li>
                <NavLink to="login" onClick={`${openMenu} ${disconnect}`}>
                  {user.user.is_admin === "" ? "CONNEXION" : "DÉCONNEXION"}
                </NavLink>
              </li>
              {user.user.is_admin === "" && (
                <li>
                  <NavLink to="register" onClick={openMenu}>
                    INSCRIPTION
                  </NavLink>
                </li>
              )}
              {user.user.is_admin === 1 && (
                <li>
                  <NavLink to="admin" onClick={openMenu}>
                    ADMIN
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
      {/* {closeMenu()} */}
    </>
  );
}

export default Header;
