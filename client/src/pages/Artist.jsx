import { NavLink } from "react-router-dom";
import "../style/artist.css";

function Artist() {
  return (
    <>
      <header>
        <h1>AFAC 974 : Gallerie</h1>
      </header>
      <section>
        <h2>Nos amis les photographes</h2>
        <div className="artist">
          <article>
            <figure>
              <NavLink to="photographer">
                <img
                  src="images/photographer0/miniature/photographer.jpg"
                  alt=""
                />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photographer">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photographer">
                <img
                  src="images/photographer1/miniature/photographer.jpg"
                  alt=""
                />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photographer">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photographer">
                <img
                  src="images/photographer2/miniature/photographer.jpg"
                  alt=""
                />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photographer">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photographer">
                <img
                  src="images/photographer3/miniature/photographer.jpg"
                  alt=""
                />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photographer">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photographer">
                <img
                  src="images/photographer4/miniature/photographer.jpg"
                  alt=""
                />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photographer">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photographer">
                <img
                  src="images/photographer/miniature/photographer.jpg"
                  alt=""
                />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photograph0.html">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photographer">
                <img
                  src="images/photographe6/miniature/photographer.jpg"
                  alt=""
                />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photographer">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photographer">
                <img
                  src="images/photographer7/miniature/photographer.jpg"
                  alt=""
                />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photographer">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photographer">
                <img
                  src="images/photographer8/miniature/photographer.jpg"
                  alt=""
                />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photographer">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photographer">
                <img
                  src="images/photographer9/miniature/photographer.jpg"
                  alt=""
                />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photographer">plus d&apos;info</NavLink>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default Artist;
