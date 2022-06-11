import React, { useEffect } from "react";
import "./App.css";
import Register from "./page/Register";
import Routers from "./Router/Routers";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "./Context/AuthContext";
function App() {
  const { auth } = useContext(AuthContext);
  useEffect(() => {
    const login = localStorage.getItem("isLoggin");
    if (login) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user);
          const uid = user.uid;
        } else {
        }
      });
    }
  }, []);
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
