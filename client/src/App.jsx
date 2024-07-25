import { Outlet } from "react-router-dom";
import { UserConnectionProvider } from "./contexts/UserConnectionProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
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
