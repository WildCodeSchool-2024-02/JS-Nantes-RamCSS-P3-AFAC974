import { createContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const UserConnectionContext = createContext();

// eslint-disable-next-line react/prop-types
export function UserConnectionProvider({ children }) {
  const [responsevalue, setResponsevalue] = useState("");
  const [connect, setConnect] = useState(localStorage.getItem("connect"));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("is_admin"));
  const [idUser, setIdUser] = useState(localStorage.getItem("id"));
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const disconnect = (veriftoken) => {
    localStorage.clear();
    setConnect(false);
    setIsAdmin("0");
    if (veriftoken !== 1) {
      navigate("../");
    }
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
        localStorage.setItem("id", `${auth.user.id}`);
        localStorage.setItem("is_admin", `${auth.user.is_admin}`);
        localStorage.setItem("lastname", `${auth.user.lastname}`);
        localStorage.setItem("firstname", `${auth.user.firstname}`);
        localStorage.setItem("connect", true);
        setConnect(true);
        setIsAdmin(`${auth.user.is_admin}`);
        setIdUser(auth.id);

        if (auth.user.is_admin === 1) {
          navigate("/admin");
        } else {
          navigate("./user");
        }
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
    fetch(`${import.meta.env.VITE_API_URL}/api/users/auth`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Inclusion du jeton JWT
      },
    })
      .then((response) => {
        if (!response.ok) {
          disconnect(1);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
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
        connect,
        isAdmin,
        setConnect,
        idUser,
      }}
    >
      {children}
    </UserConnectionContext.Provider>
  );
}
