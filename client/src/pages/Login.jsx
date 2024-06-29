import { useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function Login() {
  const { user, setUser } = useOutletContext();
  console.info(user);
  const [responsevalue, setResponsevalue] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        }
      );

      if (response.status === 200) {
        const auth = await response.json();

        setUser({ token: auth.token, user: auth.user });
        navigate("/");
      } else {
        const contentType = response.headers.get("content-type");
        const errorMessage = "Votre mail ou votre mot de passe est invalide";

        if (contentType && contentType.includes("application/json")) {
          const res = await response.json();
          console.info("Détails de la réponse :", res);
        }

        setResponsevalue(errorMessage);
      }
    } catch (err) {
      console.error(err);
      setResponsevalue(
        "Une erreur s'est produite. Veuillez réessayer plus tard."
      );
    }
  };

  return (
    <>
      <h1>Connexion :</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">{}</label>
          <input
            type="email"
            ref={emailRef}
            required
            placeholder="exemple@email.com"
          />
        </div>
        <div>
          <label htmlFor="password">{}</label>
          <input
            type="password"
            ref={passwordRef}
            required
            placeholder="Password"
          />
        </div>
        <button type="submit">Se connecter</button>
        {responsevalue && <p className="errormessage">{responsevalue}</p>}
      </form>
    </>
  );
}

export default Login;
