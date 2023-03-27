import React, { useState, useRef } from "react";
import { useScript } from "./hooks/useScript";
import jwt_deocde from "jwt-decode";
import Home from "./components/Home";
import LogIn from "./components/LogIn";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {localStorage.getItem("tokens") ? <Home/> : <LogIn/>}
    </div>
  );
};

export default App;
