// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfpmMaA7rpotacDoLf7DPaGIt8fG7SKv4",
  authDomain: "beauty-draft.firebaseapp.com",
  projectId: "beauty-draft",
  storageBucket: "beauty-draft.appspot.com",
  messagingSenderId: "702771529942",
  appId: "1:702771529942:web:de8fe7d1cd4834cae36177"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }