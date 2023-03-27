import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDO55d5ddT9Uihd0w-cZeK_vwHsqQNm1qk",
  authDomain: "greenenv-e43e5.firebaseapp.com",
  projectId: "greenenv-e43e5",
  storageBucket: "greenenv-e43e5.appspot.com",
  messagingSenderId: "236590879636",
  appId: "1:236590879636:web:908fae19456787a18fb581",
  measurementId: "G-7ECBE07HF7",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
