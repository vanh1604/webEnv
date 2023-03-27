import React, { useEffect, useState } from "react";
import { db } from "../hooks/firebase-config";
import { collection, getDocFromCache, setDoc, doc } from "firebase/firestore";
import jwt_deocde from "jwt-decode";
const Home = (props) => {
  const [user, setUser] = useState({});
  const usersCollectionRef = collection(db, "user",'vietanhscout@gmail.com');
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
  const checkUser = async () => {
    try {
      const doc = await getDocFromCache(usersCollectionRef);

      // Document was found in the cache. If no cached document exists,
      // an error will be returned to the 'catch' block below.
      console.log("Cached document data:", doc.data());
    } catch (e) {
      console.log("Error getting cached document:", e);
    }
  };
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
        <button onClick={checkUser}>checkUser</button>
      </div>
    </div>
  );
};

export default Home;
