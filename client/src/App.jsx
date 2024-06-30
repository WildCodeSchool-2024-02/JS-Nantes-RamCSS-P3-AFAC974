import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [user, setUser] = useState({user:"user"});

  return (
    <>
      <Header />
      <Outlet context={{ user, setUser }} />
      <Footer />
    </>
  );
}

export default App;
