import React, { useState } from "react";

const Home = (props) => {
  const [user, setUser] = useState({});
  const Logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        {/* <h1>{props.user.name}</h1>
        <img src={props.user.picture} alt="profile" />
        <p>{props.user.email}</p> */}

        <button onClick={Logout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
