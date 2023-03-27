import React, { useEffect, useState } from "react";
import jwt_deocde from "jwt-decode";
const Home = (props) => {
  const [user, setUser] = useState({});
  const Logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(()=>{
    const userCred = localStorage.getItem("tokens")
    if(userCred){
        let payload = jwt_deocde(userCred);
        setUser(payload);
    }   
  },[])
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
        <h1>{user.name}</h1>
        <img src={user.picture} alt="profile" />
        <p>{user.email}</p>

        <button onClick={Logout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
