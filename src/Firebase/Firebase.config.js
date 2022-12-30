// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmVbUqwliCp5wzEBlc3C2UEUlqKAEpsvI",
  authDomain: "flicker-app-b3e52.firebaseapp.com",
  projectId: "flicker-app-b3e52",
  storageBucket: "flicker-app-b3e52.appspot.com",
  messagingSenderId: "459179510704",
  appId: "1:459179510704:web:1d8ff5519853e29f842475"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;