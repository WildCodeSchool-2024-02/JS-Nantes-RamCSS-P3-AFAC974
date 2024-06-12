import { NavLink } from "react-router-dom";

import logo from "../assets/images/logos/logo.png";
import "../style/home.css";

function Home() {
  return (
    <>
      <figure className="logo">
        <img src={logo} alt="" />
      </figure>
      <header>
        <h1>AFAC 971</h1>
      </header>
      <section>
        <h2>Petit poisson corail.</h2>
        <h3>Nom de l&apos;auteur: Marc Jordan.</h3>
        <div className="text-img">
          <figure>
            <img src="images/photograph0/photo0.jpg" alt="" />
          </figure>
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut harum
              unde, ratione provident, doloruiure in vitae explicabo voluptate
              dicta temporibus sunt tempora id adipisci dolore et laborum vero!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              consequuntur saepe quo? Sapiente, repudiandae voluptatibus dolore
              veritatis adipisci beatae facilis magni odio ducimus, magnam sunt
              eius praesentium odit debitis nulla. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nulla ipsa quis cupiditate quos quam
              porro velit soluta et maxime totam, ex cumque vitae provident,
              modi, vel sequi ut quia earum! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Ab culpa, maiores corporis odit
              exercitationem porro ipsam hic mollitia recusandae praesentium
              voluptatem beatae, explicabo, voluptate quisquam possimus tempore
              repellendus. Eligendi, hic.
            </p>
          </article>
        </div>
      </section>
      <section className="picture-photograph">
        <article>
          <figure>
            <NavLink to="photo0">
              <img src="images/photograph3/miniature/photograph.jpg" alt="" />
            </NavLink>
          </figure>
          <h3>Nom du photographe</h3>
          <p className="link-photo">
            <NavLink to="photo0">plus d&apos;info</NavLink>
          </p>
        </article>
        <article>
          <figure>
            <NavLink to="photo0">
              <img src="images/photograph4/miniature/photograph.jpg" alt="" />
            </NavLink>
          </figure>
          <h3>Nom du photographe</h3>
          <p className="link-photo">
            <NavLink to="photo0">plus d&apos;info</NavLink>
          </p>
        </article>
        <article>
          <figure>
            <NavLink to="photo0">
              <img src="images/photograph5/miniature/photograph.jpg" alt="" />
            </NavLink>
          </figure>
          <h3>Nom du photographe</h3>
          <p className="link-photo">
            <NavLink to="photo0">plus d&apos;info</NavLink>
          </p>
        </article>
        <article>
          <figure>
            <NavLink to="photo0">
              <img src="images/photograph6/miniature/photograph.jpg" alt="" />
            </NavLink>
          </figure>
          <h3>Nom du photographe</h3>
          <p className="link-photo">
            <NavLink to="photo0">plus d&apos;info</NavLink>
          </p>
        </article>
      </section>
    </>
  );
}

export default Home;
