import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserConnectionContext } from "./contexts/UserConnectionProvider";

function User() {
  const { connect } = useContext(UserConnectionContext);

  if (!connect) {
    return <h1>ERROR 403 FORDIBEN</h1>;
  }

  return (
    <>
      <p className="link-panel">
        <NavLink to="./">Revenir au panneau d'Utilisateur</NavLink>
      </p>
      <Outlet />
    </>
  );
}

export default User;
