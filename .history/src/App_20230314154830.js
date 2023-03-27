import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";

const App = () => {
  console.log(localStorage.getItem("tokens"));
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Routes>
        {localStorage.getItem("tokens") ? (
          <Route path="/home" element={<Home />} />
        ) : (
          <Route path="/Signin" element={<LogIn />} />
        )}
      </Routes>
    </div>
  );
};

export default App;
