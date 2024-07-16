import { createContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const UserConnectionContext = createContext();

// eslint-disable-next-line react/prop-types
export function UserConnectionProvider({ children }) {
  const [responsevalue, setResponsevalue] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const disconnect = () => {
    localStorage.clear();
  };
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
        localStorage.setItem("token", `${auth.token}`);
        localStorage.setItem("is_admin", `${auth.user.is_admin}`);
        localStorage.setItem("lastname", `${auth.user.lastname}`);
        localStorage.setItem("firstname", `${auth.user.firstname}`);

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

  const token = localStorage.getItem("token");

  if (token !== null) {
    /* const response = */ fetch(
      `${import.meta.env.VITE_API_URL}/api/users/auth`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Inclusion du jeton JWT
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          localStorage.clear();
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // if (!response.ok) {
        //   localStorage.clear();
        // }
      })

      .catch((error) => {
        console.error("There was a problem with the fetch operation: ", error);
        throw error;
      });
  }
  return (
    <UserConnectionContext.Provider
      /* eslint-disable-next-line react/jsx-no-constructed-context-values */
      value={{
        responsevalue,
        emailRef,
        passwordRef,
        handleSubmit,
        disconnect,
      }}
    >
      {children}
    </UserConnectionContext.Provider>
  );
}
