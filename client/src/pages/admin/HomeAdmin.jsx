import { NavLink } from "react-router-dom";

import "../../style/admin.css";

function HomeAdmin() {
  return (
    <>
      <header>
        <h1>BIENVENUE DANS VOTRE PANNEAU D&apos;ADMINISTRATION</h1>
      </header>
      <main>
        <section className="admin">
          <p>A partir ce panneau vous pourrez</p>
          <ol>
            <li>
              <NavLink to="add-artist">Ajouter un artiste</NavLink>
            </li>
            <li>
              <NavLink to="update-artist">
                Modifier un artiste ou supprimer un artiste
              </NavLink>
            </li>
          </ol>
          <ol>
            <li>
              <NavLink to="add-artwork">Ajouter une oeuvre</NavLink>
            </li>
            <li>
              <NavLink to="update-artwork">
                Modifier une oeuvre ou supprimer une oeuvre
              </NavLink>
            </li>
          </ol>
          <ol>
            <li>
              <NavLink to="add-user">Ajouter un membre</NavLink>
            </li>
            <li>
              <NavLink to="update-user">
                Modifier un membre ou supprimer un membre
              </NavLink>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
}
export default HomeAdmin;
