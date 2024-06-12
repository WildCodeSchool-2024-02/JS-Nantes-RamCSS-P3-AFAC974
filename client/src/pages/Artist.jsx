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
              <NavLink to="photograph0">
                <img src="images/photograph0/miniature/photograph.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photograph0">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photograph0">
                <img src="images/photograph1/miniature/photograph.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photograph0">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photograph0">
                <img src="images/photograph2/miniature/photograph.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photograph0">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photograph0">
                <img src="images/photograph3/miniature/photograph.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photograph0">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photograph0">
                <img src="images/photograph4/miniature/photograph.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photograph0">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photograph0">
                <img src="images/photograph5/miniature/photograph.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photograph0.html">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photograph0">
                <img src="images/photograph6/miniature/photograph.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photograph0">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photograph0">
                <img src="images/photograph7/miniature/photograph.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photograph0">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photo0graph">
                <img src="images/photograph8/miniature/photograph.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photograph0">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photograph0">
                <img src="images/photograph9/miniature/photograph.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du photographe</h3>
            <p className="link-photo">
              <NavLink to="photograph0">plus d&apos;info</NavLink>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default Artist;
