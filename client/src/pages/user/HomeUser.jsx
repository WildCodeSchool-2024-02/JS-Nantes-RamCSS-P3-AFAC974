import { NavLink } from "react-router-dom";

import "../../style/admin.css";

function HomeUser() {
  return (
    <>
      <header>
        <h1>BIENVENUE DANS VOTRE PANNEAU UTILISATEUR</h1>
      </header>
      <main>
        <section className="admin">
          <p>A partir ce panneau vous pourrez</p>
          <ol>
            <li>
              <NavLink to="update-user">Modifier vos inforamtaion :</NavLink>
            </li>
            <li>
              <NavLink to="favorite">
                Voir vos oeuvres mise en favoris :
              </NavLink>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
}
export default HomeUser;
