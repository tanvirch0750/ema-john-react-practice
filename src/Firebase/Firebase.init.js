// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr2Rl4fV6APUF7o9NUDtdEbt4zGtiwTPg",
  authDomain: "ema-john-simple-5714e.firebaseapp.com",
  projectId: "ema-john-simple-5714e",
  storageBucket: "ema-john-simple-5714e.appspot.com",
  messagingSenderId: "1035389781286",
  appId: "1:1035389781286:web:f45f2ca35dc773657c6de7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
