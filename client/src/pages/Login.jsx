import { useContext } from "react";
import { UserConnectionContext } from "../contexts/UserConnectionProvider";

import "../style/login.css";

function Login() {
  const { responsevalue, emailRef, passwordRef, handleSubmit, connect } =
    useContext(UserConnectionContext);
  if (connect) return <>Vous êtes déjà connecté</>;
  return (
    <>
      <h1>Connexion :</h1>
      <form onSubmit={handleSubmit} className="login">
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
        <button className="button-form" type="submit">
          Se connecter
        </button>
        {responsevalue && <p className="errormessage">{responsevalue}</p>}
      </form>
    </>
  );
}

export default Login;
