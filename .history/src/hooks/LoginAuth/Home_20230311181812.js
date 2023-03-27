import React from "react";

const Home = () => {
  const Logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <h1>Hello Word</h1>
      <button onClick={Logout}>Logout</button>
    </div>
  );
};

export default Home;
