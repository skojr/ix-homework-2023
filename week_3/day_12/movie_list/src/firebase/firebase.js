// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe3mOXQEwokZ6_JWkQ9s6iW4I-6gloZqk",
  authDomain: "movie-5daf8.firebaseapp.com",
  projectId: "movie-5daf8",
  storageBucket: "movie-5daf8.appspot.com",
  messagingSenderId: "576037113055",
  appId: "1:576037113055:web:6e0d911f38f0cd71966d6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage }
