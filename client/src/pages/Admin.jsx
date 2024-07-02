import { useContext } from "react";

import { UserConnectionContext } from "../contexts/UserConnectionProvider";

function Admin() {
  const { user } = useContext(UserConnectionContext);

  return (
    <header>
      {user.user.is_admin !== 1 ? (
        <p>ERROR 401 FORDIBEN</p>
      ) : (
        <h1>Bienvenue dans le panneau d&apos;administration</h1>
      )}
    </header>
  );
}
export default Admin;
