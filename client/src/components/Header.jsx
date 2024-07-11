import { NavLink } from "react-router-dom";

import { useState, useContext } from "react";

import { UserConnectionContext } from "../contexts/UserConnectionProvider";
import "../style/header.css";

function Header() {
  const { user, SetUser } = useContext(UserConnectionContext);

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
            <img src="../images/logos/logonavbar.png" alt="Logo" />
          </NavLink>
          <div>
            <svg
              className="hb"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 10"
              stroke="#6b6986"
              fill="rgba(0,0,0,0)"
              onClick={openMenu}
            >
              <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                <animate
                  dur="0.2s"
                  attributeName="d"
                  values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                  fill="freeze"
                  begin="start.begin"
                />
                <animate
                  dur="0.2s"
                  attributeName="d"
                  values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
                  fill="freeze"
                  begin="reverse.begin"
                />
              </path>
              <rect width="10" height="10" stroke="none">
                <animate
                  dur="2s"
                  id="reverse"
                  attributeName="width"
                  begin="click"
                />
              </rect>
              <rect width="10" height="10" stroke="none">
                <animate
                  dur="0.001s"
                  id="start"
                  attributeName="width"
                  values="10;0"
                  fill="freeze"
                  begin="click"
                />
                <animate
                  dur="0.001s"
                  attributeName="width"
                  values="0;10"
                  fill="freeze"
                  begin="reverse.begin"
                />
              </rect>
            </svg>
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
