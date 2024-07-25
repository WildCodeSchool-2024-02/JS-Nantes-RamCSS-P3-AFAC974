import { useContext } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { UserConnectionContext } from "../contexts/UserConnectionProvider";
import PictureGallery from "../components/PictureGallery";

import "../style/home.css";
import PictureArtist from "../components/PictureArtist";

function Home() {
  const { connect } = useContext(UserConnectionContext);
  const firstname = localStorage.getItem("firstname");
  const lastname = localStorage.getItem("lastname");

  const data = useLoaderData();
  const photographer = data.artist;
  const photo = data.artwork;

  return (
    <>
      <figure className="logo">
        <img src="images/logos/logo.png" alt="" />
      </figure>
      <header className="title">
        <h1>AFAC 974</h1>
      </header>
      <p className="user">bonjour {connect && `${firstname} ${lastname}`}</p>

      <section className="photo">
        <h2>{photo[0].title}</h2>
        <h3>
          Nom de l&apos;auteur: {photo[0].firstname} {photo[0].lastname}.
        </h3>
        <div className="text-img">
          <figure className="home-artwork">
            <NavLink to={`../photo?id=${photo[0].id}`}>
              <img src={photo[0].image} alt={photo[0].alt_artwork} />
            </NavLink>
          </figure>
          <article>
            <p className="description-picture">
              Présentation de la photographie
              <br />
              {`${photo[0].description}`}
            </p>
            <div className="gallery">
              {photo.map((value) => (
                <PictureGallery key={value.id} value={value} name={1} />
              ))}
            </div>
          </article>
        </div>
      </section>
      <section className="artist">
        {photographer.map((value) => (
          <PictureArtist key={value.id} value={value} />
        ))}
      </section>
      <main className="text-img text text-about">
        <section>
          <h2>
            Immersion dans les <strong>Fonds Marins</strong>
          </h2>
          <article>
            <h3>
              Découvrez la Beauté des <strong>Fonds Marins</strong>
            </h3>
            <p>
              Notre site vous offre une immersion unique dans les profondeurs
              des océans des DOM-TOM. Chaque <em>photographie</em> est une
              fenêtre ouverte sur un monde de couleurs et de vie marine.
            </p>
            <p>
              Les œuvres <em>photographiques</em> présentées ici capturent la
              diversité et la richesse des écosystèmes sous-marins. Vous y
              trouverez des images étonnantes de <em>coraux</em>, de poissons
              tropicaux, et bien plus encore.
            </p>
            <p>
              Explorez nos galeries pour une expérience visuelle époustouflante
              et laissez-vous emporter par la magie des profondeurs marines.
            </p>
          </article>
          <article>
            <h3>
              Rencontrez Nos <em>Photographes</em> Talentueux
            </h3>
            <p>
              Les <em>photographes</em> de notre galerie sont des experts de la{" "}
              <strong>photographie sous-marine</strong>. Leur passion pour la
              mer et leur talent artistique se reflètent dans chaque image.
            </p>
            <p>
              Ils explorent les récifs <em>coralliens</em>, les épaves et les
              grottes sous-marines pour capturer des moments uniques et fugaces.
              Leur travail est un témoignage de la beauté et de la fragilité des
              écosystèmes marins.
            </p>
            <p>
              Découvrez leurs biographies et apprenez-en plus sur les techniques
              et les équipements qu'ils utilisent pour réaliser ces clichés
              époustouflants.
            </p>
          </article>
          <article>
            <h3>Participez à Nos Expositions Virtuelles</h3>
            <p>
              Nous organisons régulièrement des expositions virtuelles pour
              mettre en avant les nouvelles œuvres de nos <em>photographes</em>.
              Chaque exposition est une invitation à voyager sous la mer depuis
              le confort de votre maison.
            </p>
            <p>
              Inscrivez-vous à notre newsletter pour recevoir les dernières
              nouvelles et invitations à nos événements spéciaux. Ne manquez pas
              l'opportunité de découvrir les nouvelles tendances de la{" "}
              <em>photographie sous-marine</em>.
            </p>
            <p>
              Partagez vos impressions et vos coups de cœur avec notre
              communauté en ligne. Rejoignez-nous sur les réseaux sociaux pour
              rester connecté et échanger avec d'autres passionnés de la mer.
            </p>
          </article>
        </section>

        <section>
          <h2>Notre Collection Unique</h2>
          <article>
            <h3>
              Une Collection Unique de{" "}
              <strong>Photographies Sous-Marines</strong>
            </h3>
            <p>
              Notre collection est le fruit de nombreuses années de travail et
              d'exploration. Chaque photo a été soigneusement sélectionnée pour
              sa qualité artistique et son authenticité.
            </p>
            <p>
              Les images capturent des moments rares et précieux de la vie
              marine. Vous y découvrirez des espèces endémiques et des paysages
              sous-marins à couper le souffle.
            </p>
            <p>
              Nous nous efforçons de renouveler régulièrement notre collection
              pour offrir à nos visiteurs une expérience toujours enrichissante
              et captivante.
            </p>
          </article>
          <article>
            <h3>La Protection de la Vie Marine</h3>
            <p>
              Nous sommes profondément engagés dans la protection de la vie
              marine. Nos <em>photographes</em> travaillent en étroite
              collaboration avec des biologistes marins et des organisations de
              conservation.
            </p>
            <p>
              Chaque photo est une célébration de la beauté naturelle et une
              incitation à la préserver. En visitant notre site, vous soutenez
              nos efforts pour sensibiliser le public à la fragilité des
              écosystèmes marins.
            </p>
            <p>
              Découvrez nos partenariats et les actions que nous menons pour
              protéger les récifs <em>coralliens</em> et les espèces menacées.
            </p>
          </article>
          <article>
            <h3>Visitez Nos Galeries en Ligne</h3>
            <p>
              Nos galeries en ligne sont conçues pour vous offrir une expérience
              immersive et interactive. Parcourez nos collections par thème, par{" "}
              <em>photographe</em> ou par région.
            </p>
            <p>
              Chaque image est accompagnée d'une description détaillée et
              d'anecdotes sur la prise de vue. Apprenez-en plus sur les
              techniques de <em>photographie sous-marine</em> et les défis
              rencontrés par nos <em>photographes</em>.
            </p>
            <p>
              Partagez vos photos préférées avec vos amis et inspirez-les à
              découvrir la beauté cachée des <strong>fonds marins</strong> des
              DOM-TOM.
            </p>
          </article>
        </section>

        <section>
          <h2>Exploration des Mers des DOM-TOM</h2>
          <article>
            <h3>
              Explorez les <strong>Fonds Marins</strong> des DOM-TOM
            </h3>
            <p>
              Les DOM-TOM offrent une diversité incroyable de paysages
              sous-marins. Chaque territoire possède ses propres trésors cachés,
              des récifs <em>coralliens</em> aux mangroves en passant par les
              épaves mystérieuses.
            </p>
            <p>
              Nos <em>photographes</em> parcourent les mers de la Guadeloupe, de
              la Martinique, de la Réunion et bien d'autres îles pour capturer
              la beauté sous-marine unique de chaque région.
            </p>
            <p>
              Plongez avec nous et découvrez les merveilles sous-marines des
              DOM-TOM, un voyage inoubliable à travers les eaux turquoise et les
              récifs colorés.
            </p>
          </article>
          <article>
            <h3>Un Monde de Couleurs et de Vie</h3>
            <p>
              Les <strong>fonds marins</strong> des DOM-TOM regorgent de
              couleurs vibrantes et de formes de vie fascinantes. Des{" "}
              <em>coraux</em> fluorescents aux poissons multicolores, chaque
              plongée est une explosion de couleurs.
            </p>
            <p>
              Nos <em>photographes</em> utilisent des techniques spéciales pour
              capturer ces couleurs éclatantes et rendre justice à la beauté
              naturelle des océans.
            </p>
            <p>
              Explorez nos galeries pour découvrir les nuances infinies et les
              motifs complexes des <strong>fonds marins</strong>. Chaque photo
              est une œuvre d'art en soi, témoignant de la richesse de la vie
              marine.
            </p>
          </article>
          <article>
            <h3>Plongez dans l'Aventure Sous-Marine</h3>
            <p>
              La <em>photographie sous-marine</em> est une aventure passionnante
              et exigeante. Nos <em>photographes</em> doivent faire face à des
              conditions difficiles pour capturer ces images exceptionnelles.
            </p>
            <p>
              Chaque plongée est une exploration de l'inconnu, où la patience et
              la persévérance sont récompensées par des clichés époustouflants.
            </p>
            <p>
              Rejoignez-nous dans cette aventure sous-marine et découvrez les
              défis et les joies de la <em>photographie</em> des{" "}
              <strong>fonds marins</strong> des DOM-TOM.
            </p>
          </article>
        </section>

        <section>
          <h2>Ressources et Communauté</h2>
          <article>
            <h3>Partagez Vos Expériences</h3>
            <p>
              Notre site n'est pas seulement une galerie, mais aussi une
              plateforme communautaire. Partagez vos expériences de plongée et
              de <em>photographie sous-marine</em> avec d'autres passionnés.
            </p>
            <p>
              Rejoignez notre forum et discutez des meilleurs spots de plongée,
              des techniques de <em>photographie</em>, et des équipements
              indispensables. Échangez vos conseils et astuces pour capturer les
              meilleurs clichés sous-marins.
            </p>
            <p>
              Inscrivez-vous à nos ateliers et webinaires pour améliorer vos
              compétences en <em>photographie sous-marine</em>. Nos experts sont
              là pour vous guider et répondre à toutes vos questions.
            </p>
          </article>
          <article>
            <h3>Soutenez Notre Mission</h3>
            <p>
              En visitant notre site et en partageant nos photos, vous
              contribuez à sensibiliser le public à la beauté et à la fragilité
              des écosystèmes marins. Chaque action compte pour protéger notre
              planète.
            </p>
            <p>
              Faites un don pour soutenir nos projets de conservation et nos
              partenariats avec des organisations de protection marine. Votre
              contribution aide à financer des programmes de recherche et de
              préservation des récifs <em>coralliens</em> et des espèces
              menacées.
            </p>
            <p>
              Participez à nos campagnes de sensibilisation et devenez un acteur
              du changement. Ensemble, nous pouvons faire une différence pour la
              protection des océans et la préservation de la biodiversité
              marine.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default Home;
