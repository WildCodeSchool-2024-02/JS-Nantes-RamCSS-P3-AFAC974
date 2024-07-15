import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import {
  UserConnectionContext,
  UserConnectionProvider,
} from "../contexts/UserConnectionProvider";

function Admin() {
  const { user } = useContext(UserConnectionContext);

  return (
    <UserConnectionProvider>
      {user.user.is_admin !== 1 ? (
        <><h1>ERROR 401 FORDIBEN</h1><Outlet /></>
      ) : (
        <>
          <p className="link-panel">
            <NavLink to="./">Revenir au panneau d'administration</NavLink>
          </p>
          <Outlet />
        </>
      )}
    </UserConnectionProvider>
  );
}
export default Admin;
