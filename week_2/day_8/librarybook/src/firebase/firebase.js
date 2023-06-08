// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHYUnrnnVwDDTG40PAhNqxbBUWfd09ChQ",
  authDomain: "library-project-21ac7.firebaseapp.com",
  projectId: "library-project-21ac7",
  storageBucket: "library-project-21ac7.appspot.com",
  messagingSenderId: "407913618247",
  appId: "1:407913618247:web:2d0a3bfe623ebf1b72ca62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}