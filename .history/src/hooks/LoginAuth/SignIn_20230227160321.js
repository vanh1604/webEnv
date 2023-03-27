import React, { useEffect, useState } from "react";
import { auth, provider } from "./GoogleSignIn";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";
import "./SignIn.css";
const SignIn = () => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  // useEffect(() => {
  //   setValue(localStorage.getItem("email"));
  // }, []);
  return (
    <div>
      {value ? (
        <Home />
      ) : (
        <button onClick={handleClick} className="login">
          Signin with Google
        </button>
      )}
    </div>
  );
};

export default SignIn;
