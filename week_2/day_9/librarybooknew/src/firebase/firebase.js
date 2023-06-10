// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfYSpclQ5HcVpl-R40qy6ndUxPHw40w6M",
  authDomain: "library-project-dff5b.firebaseapp.com",
  projectId: "library-project-dff5b",
  storageBucket: "library-project-dff5b.appspot.com",
  messagingSenderId: "736536393286",
  appId: "1:736536393286:web:4db3107bddafbf372e7c47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }