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
            <li><NavLink to="add-artist">Ajouter un artiste</NavLink></li>
            <li><NavLink to="update-artist">Modifier un artiste</NavLink></li>
            <li><NavLink to="remove-artist">Supprimer un artiste</NavLink></li>
          </ol>
          <ol>
            <li><NavLink to="add-artwork">Ajouter une oeuvre</NavLink></li>
            <li><NavLink to="update-artwork">Modifier une oeuvre</NavLink></li>
            <li><NavLink to="remove-artwork">supprimer une oeuvre</NavLink></li>
          </ol>
          <ol>
            <li><NavLink to="add-user">Ajouter un membre</NavLink></li>
            <li><NavLink to="update-user">Modifier un membre</NavLink></li>
            <li><NavLink to="remove-user">Supprimer un membre</NavLink></li>
          </ol>
          <ol>
            <li>
            <NavLink to="update-status-user">Modifier le status d'un membre pour le faire passser
              administrateur</NavLink>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
}
export default HomeAdmin;
