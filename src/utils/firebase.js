// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkVyfetTclLQAxsyybiRLRihrDoP1oSOI",
  authDomain: "netflix-gpt-87658.firebaseapp.com",
  projectId: "netflix-gpt-87658",
  storageBucket: "netflix-gpt-87658.appspot.com",
  messagingSenderId: "331964924466",
  appId: "1:331964924466:web:f7a559bba504b4bc60722b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();