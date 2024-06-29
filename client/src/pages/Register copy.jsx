import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  // Référence pour le champ email
  const emailRef = useRef();
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
      console.info("response => ", res);
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

  // Rendu du composant formulaire
  return (
    <>
      <header>
        <h1>Inscription :</h1>
      </header>
      <form onSubmit={handleSubmit}>
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
            type="email"
            id="email"
            required
            placeholder="exemple@email.com"
          />
        </div>
        <div>
          {/* Champ pour le mot de passe */}
          <label htmlFor="password">{}</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder="Mot de passe"
          />
        </div>
        {/* Indicateur de force du mot de passe */}
        <p>
          {password.length >= 8 ? "✅" : "❌"}{" "}
          {`length: ${password.length} >= 8`}
        </p>

        <div>
          {/* Champ pour la confirmation du mot de passe */}
          <label htmlFor="confirm-password">{}</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            placeholder="Confirmation du mot de passe"
          />
        </div>
        {/* Indicateur de correspondance avec le mot de passe */}
        <p>{password === confirmPassword ? "✅" : "❌"}</p>
        {/* Bouton de soumission du formulaire */}
        <button type="submit">S&apos;inscrire</button>
        {responsevalue && <p className="errormessage">{responsevalue}</p>}
      </form>
    </>
  );
}

export default Register;
