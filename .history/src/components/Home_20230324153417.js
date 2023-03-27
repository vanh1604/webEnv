import React, { useEffect, useState } from "react";
import { db } from "../hooks/firebase-config";
import { collection, getDocFromCache, setDoc, doc } from "firebase/firestore";
import jwt_deocde from "jwt-decode";
const Home = (props) => {
  const [user, setUser] = useState({});
  const usersCollectionRef = collection(db, "user");

  const Logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const createUser = async () => {
    await setDoc(doc(db, "user", user.email.toString().toLowerCase()), {
      name: user.name,
      avatar: user.picture,
      email: user.email,
    });
  };
  const docRef = doc(db, "cities", user.email.toString());
  
  useEffect(() => {
    const userCred = localStorage.getItem("tokens");
    if (userCred) {
      let payload = jwt_deocde(userCred);
      setUser(payload);
    }
  }, []);

  return (
    <div>
      <div>
        <h1>{user.name}</h1>
        <img src={user.picture} alt="profile" />
        <p>{user.email}</p>
        <button onClick={createUser}>createUser</button>
        <button onClick={Logout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
