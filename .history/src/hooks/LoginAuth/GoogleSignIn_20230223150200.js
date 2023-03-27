import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDO55d5ddT9Uihd0w-cZeK_vwHsqQNm1qk",
  authDomain: "greenenv-e43e5.firebaseapp.com",
  projectId: "greenenv-e43e5",
  storageBucket: "greenenv-e43e5.appspot.com",
  messagingSenderId: "236590879636",
  appId: "1:236590879636:web:908fae19456787a18fb581",
  measurementId: "G-7ECBE07HF7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
