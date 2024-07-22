import { NavLink, Outlet } from "react-router-dom";
import { UserConnectionProvider } from "../contexts/UserConnectionProvider";

function Admin() {
  const isAdmin = localStorage.getItem("is_admin");

  return (
    <UserConnectionProvider>
      {isAdmin !== "1" ? (
        <h1>ERROR 401 FORDIBEN</h1>
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
