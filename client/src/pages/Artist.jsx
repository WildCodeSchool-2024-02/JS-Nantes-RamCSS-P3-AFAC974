import { NavLink, useLoaderData } from "react-router-dom";
import "../style/artist.css";

function Artist() {
  const data = [useLoaderData([])];
  const photographer = data[0];
  return (
    <>
      <header>
        <h1>AFAC 974 : Photographes</h1>
      </header>
      <section>
        <h2>Nos amis les photographes</h2>
        <div className="artist">
          {photographer.map((value) => (
            <article key={value.id}>
              <figure>
                <NavLink to={`../photographer?id=${value.id}`}>
                  <img
                    src={`images/photos/photographer${value.id}/thumbnails/photographer.jpg`}
                    alt=""
                  />
                </NavLink>
              </figure>
              <h3>
                {value.firstname} {value.lastname}
              </h3>
              <p className="link-photo">
                <NavLink to={`../photographer?id=${value.id}`}>
                  plus d&apos;info
                </NavLink>
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Artist;
