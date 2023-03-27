import React from "react";

const Home = () => {
  const googlebuttonref = useRef();
  const [user, setuser] = useState({});
  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwt_deocde(userCred);
    localStorage.setItem("tokens", userCred);
    console.log(payload);
    setuser(payload);
  };
  return <div></div>;
};

export default Home;
