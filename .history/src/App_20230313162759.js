import React, { useState, useRef } from "react";
import { useScript } from "./hooks/useScript";
import jwt_deocde from "jwt-decode";
import Home from "./components/Home";
import LogIn from "./components/LogIn";

const App = () => {
  const googlebuttonref = useRef();
  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwt_deocde(userCred);
    localStorage.setItem("tokens", userCred);
    console.log(payload);
  };

  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id:
        "446135525083-2gtc2qbjjjkek1enrrd7jg5s38fq255s.apps.googleusercontent.com", // here's your Google ID
      callback: onGoogleSignIn,
      auto_select: false,
    });

    window.google.accounts.id.renderButton(googlebuttonref.current, {
      size: "medium",
    });
  });

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
