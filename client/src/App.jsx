import { Outlet } from "react-router-dom";
// import { useEffect } from "react";
import { UserConnectionProvider } from "./contexts/UserConnectionProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // useEffect(() => {
  //   const disableRightClick = (event) => {
  //     event.preventDefault();
  //   };

  //   document.addEventListener("contextmenu", disableRightClick);

  //   return () => {
  //     document.removeEventListener("contextmenu", disableRightClick);
  //   };
  // }, []);
  return (
    <>
      <UserConnectionProvider>
        <Header />
        <Outlet />
      </UserConnectionProvider>
      <Footer />
    </>
  );
}

export default App;
