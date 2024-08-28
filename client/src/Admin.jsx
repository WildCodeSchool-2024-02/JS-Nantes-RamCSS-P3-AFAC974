import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserConnectionContext } from "./contexts/UserConnectionProvider";

function Admin() {
  const { connect, isAdmin } = useContext(UserConnectionContext);

  if (!connect || isAdmin !== "1") return <h1>ERROR 403 FORDIBEN</h1>;

  return (
    <>
      <p className="link-panel">
        <NavLink to="./">Revenir au panneau d'administration</NavLink>
      </p>
      <Outlet />
    </>
  );
}

export default Admin;
