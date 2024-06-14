import { NavLink } from "react-router-dom";

import "../style/gallery.css";

function Gallery() {
  return (
    <>
      <header>
        <h1>AFAC 974 : Gallerie</h1>
      </header>
      <section>
        <h2>Nos potos des fonds marin d&apos;outre-mer</h2>
        <div className="gallery">
          <article>
            <figure>
              <NavLink to="photo">
                <img src="images/photographer0/miniature/photo0.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du tableau</h3> <p>Nom du photographe</p>
            <p className="link-photo">
              <NavLink to="photo0">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photo">
                <img src="images/photographer0/miniature/photo1.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du tableau</h3> <p>Nom du photographe</p>
            <p className="link-photo">
              <NavLink to="photo">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photo">
                <img src="images/photograph0/miniature/photo2.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du tableau</h3> <p>Nom du photographe</p>
            <p className="link-photo">
              <NavLink to="photo">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photo">
                <img src="images/photographer0/miniature/photo3.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du tableau</h3> <p>Nom du photographe</p>
            <p className="link-photo">
              <NavLink to="photo">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photo">
                <img src="images/photographer0/miniature/photo4.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du tableau</h3> <p>Nom du photographe</p>
            <p className="link-photo">
              <NavLink to="photo">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photo">
                <img src="images/photographer0/miniature/photo5.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du tableau</h3> <p>Nom du photographe</p>
            <p className="link-photo">
              <NavLink to="photo">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photo">
                <img src="images/photographer0/miniature/photo6.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du tableau</h3> <p>Nom du photographe</p>
            <p className="link-photo">
              <NavLink to="photo0">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photo">
                <img src="images/photographer0/miniature/photo7.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du tableau</h3> <p>Nom du photographe</p>
            <p className="link-photo">
              <NavLink to="photo">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photo">
                <img src="images/photographer/miniature/photo8.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du tableau</h3> <p>Nom du photographe</p>
            <p className="link-photo">
              <NavLink to="photo">plus d&apos;info</NavLink>
            </p>
          </article>
          <article>
            <figure>
              <NavLink to="photo">
                <img src="images/photographer0/miniature/photo9.jpg" alt="" />
              </NavLink>
            </figure>
            <h3>Nom du tableau</h3> <p>Nom du photographe</p>
            <p className="link-photo">
              <NavLink to="photo">plus d&apos;info</NavLink>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
export default Gallery;
