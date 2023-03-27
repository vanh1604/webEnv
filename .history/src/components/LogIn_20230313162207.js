import React from "react";

const LogIn = (props) => {
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
      {Object.keys(user).length == 0 && <div ref={googlebuttonref}></div>}
      {Object.keys(user).length > 0 && (
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

export default LogIn;
