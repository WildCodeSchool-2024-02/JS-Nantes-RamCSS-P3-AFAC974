import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserConnectionContext } from "../contexts/UserConnectionProvider";
import "../style/register.css";

function Register() {
  // Référence pour le champ email
  const emailRef = useRef();

  // Référence pour le champ password et confirm-password
  const confirmPasswordRef = useRef();
  const passwordRef = useRef();
  // Référence pour le champ firstname

  const firstnameRef = useRef();

  // Référence pour le champ firstname
  const lastnameRef = useRef();

  // États pour le mot de passe et la confirmation du mot de passe
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //  États pour l'affichage de l&apos;erreur
  const [responsevalue, setResponsevalue] = useState("");

  // Messsage d'erreur
  const errorMessage =
    "Une erreur s'est produite. Veuillez réessayer plus tard.";

  // Hook pour la navigation
  const navigate = useNavigate();

  const generatePassword = () => {
    const characters =
      "azertyupqsdfghjkmwxcvbn23456789AZERTYUPQSDFGHJKMWXCVBN&|@#§!_-€*$%£µ?:+=°";
    let pass = "";
    for (let i; pass.length < 16; i += i) {
      const randCharacters = Math.round(Math.random() * characters.length);
      pass += characters.substring(randCharacters, randCharacters + 1);
    }

    passwordRef.current.value = pass;
    confirmPasswordRef.current.value = pass;
    setPassword(pass);
    setConfirmPassword(pass);
  };

  const show = () => {
    const attribute = passwordRef.current.getAttribute("type");
    if (attribute === "password") {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };

  // Gestionnaire de changement du mot de passe
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Gestionnaire de changement de la confirmation du mot de passe
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour créer un nouvel utilisateur
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            email: emailRef.current.value,
            password,
          }),
        }
      );
      const res = await response.json();

      // Redirection vers la page de connexion si la création réussit
      if (response.status === 201) {
        navigate("/login");
      } else {
        const contentType = response.headers.get("content-type");
        setResponsevalue(errorMessage);

        if (contentType && contentType.includes("application/json")) {
          console.info("Détails de la réponse :", res);
        }
      }
    } catch (err) {
      console.error(err);
      setResponsevalue(errorMessage);
    }
  };
  const redColorPassword = password.length >= 8 ? "" : "errormessage";
  let ConfirmPasswordChange = "errormessage";

  if (password === confirmPassword && confirmPassword.length > 0) {
    ConfirmPasswordChange = "";
  }
  // "✅" : "❌"
  // Rendu du composant formulaire
  const { connect } = useContext(UserConnectionContext);
  if (connect) return <>Vous avez déjà un compte</>;
  return (
    <>
      <header>
        <h1>Inscription :</h1>
      </header>
      <form onSubmit={handleSubmit} className="register">
        <div>
          {/* Champ pour le nom */}
          <label htmlFor="firstname">{}</label>
          <input
            ref={firstnameRef}
            type="text"
            id="firstname"
            name="firstname"
            required
            placeholder="Pr&eacute;nom"
          />
        </div>
        <div>
          {/* Champ pour le nom */}
          <label htmlFor="lastname">{}</label>
          <input
            ref={lastnameRef}
            type="text"
            id="lastname"
            name="lastname"
            required
            placeholder="Nom"
          />
        </div>

        <div>
          {/* Champ pour l'email */}
          <label htmlFor="email">{}</label>
          <input
            ref={emailRef}
            id="email"
            required
            placeholder="exemple@email.com"
          />
        </div>
        <div className="column">
          {/* Champ pour le mot de passe */}
          <label htmlFor="password">{}</label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder="Mot de passe"
            className={redColorPassword}
          />
          <button className="button-form" type="button" onClick={show}>
            show / hide
          </button>
          <button
            className="button-form"
            type="button"
            onClick={generatePassword}
          >
            Genérer un mot de passe
          </button>
        </div>
        {/* Indicateur de force du mot de passe */}
        <p>{}</p>
        <div>
          {/* Champ pour la confirmation du mot de passe */}
          <label htmlFor="confirm-password">{}</label>
          <input
            ref={confirmPasswordRef}
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            placeholder="Confirmation du mot de passe"
            className={ConfirmPasswordChange}
          />
        </div>
        <label htmlFor="privacy-statement">
          En cochant cette case vous acceptez que vos données soit conservé
          pendant un maximum de 2 ans après votre dernière connexion, vos
          données ne seront jamais transmise à des tiers, sauf décision de
          justice
          <input id="privacy-statement" type="checkbox" required />
        </label>
        {/* Bouton de soumission du formulaire */}
        <button className="button-form" type="submit">
          S&apos;inscrire
        </button>
        {responsevalue && <p className="errormessage">{responsevalue}</p>}
      </form>
    </>
  );
}

export default Register;
