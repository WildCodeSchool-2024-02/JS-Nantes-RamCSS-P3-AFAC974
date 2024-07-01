import { createContext, useState } from "react";

export const UserConnectionContext = createContext();

// eslint-disable-next-line react/prop-types
export function UserConnectionProvider({ children }) {
  const [user, setUser] = useState({ token: "" });

  /* const response = */ fetch(
    `${import.meta.env.VITE_API_URL}/api/users/auth`,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`, // Inclusion du jeton JWT
      },
      body: "body",
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })

    .catch((error) => {
      console.error("There was a problem with the fetch operation: ", error);
      throw error;
    });

  return (
    <UserConnectionContext.Provider
      /* eslint-disable-next-line react/jsx-no-constructed-context-values */
      value={{ user, setUser }}
    >
      {children}
    </UserConnectionContext.Provider>
  );
}
