import React, { useState, useRef, useEffect } from "react";
import { useScript } from "./hooks/useScript";
import jwt_deocde from "jwt-decode";

const App = () => {
  const googlebuttonref = useRef();
  const [user, setuser] = useState(false);
  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwt_deocde(userCred);
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
  const Logout = () => {
    setuser(false);
    localStorage.clear();
    window.location.reload();
  };
  const handleClick = () => {
    
      localStorage.setItem("email",user.email);
  };
  return (
    <div
    onClick={handleClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {!user && <div ref={googlebuttonref}></div>}
      {user && (
        <div>
          <h1>{user.name}</h1>
          <img src={user.picture} alt="profile" />
          <p>{user.email}</p>

          <button onClick={Logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;
