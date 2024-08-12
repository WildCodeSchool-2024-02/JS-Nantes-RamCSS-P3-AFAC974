import { useEffect, useState, useContext } from "react";
import { UserConnectionContext } from "../../contexts/UserConnectionProvider";
import FormUpdateUser from "../../components/FormUpdateUser";

function UserUpdateUser() {
  const [user, setUser] = useState(false);
  const { idUser } = useContext(UserConnectionContext);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users/${idUser}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [idUser]);
  if (!user) {
    return "Chargement...";
  }

  return (
    <>
      <header>
        <h1>modifier vos informations :</h1>
      </header>
      <FormUpdateUser value={user} />
    </>
  );
}
export default UserUpdateUser;
