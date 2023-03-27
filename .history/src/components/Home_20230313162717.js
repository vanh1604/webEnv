import React, { useState, useRef } from "react";
import jwt_deocde from "jwt-decode";
import { useScript } from "../hooks/useScript";

const Home = (props) => {
  const googlebuttonref = useRef();
  const [user, setuser] = useState({});
  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwt_deocde(userCred);
    localStorage.setItem("tokens", userCred);
    console.log(payload);
    setuser(payload);
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
      {Object.keys(user).length == 0 && <div ref={googlebuttonref}></div>}
    </div>
  );
};

export default Home;
