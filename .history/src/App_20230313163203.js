import React from "react";

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
      {localStorage.getItem("tokens") ? <Home /> : <LogIn />}
    </div>
  );
};

export default App;
