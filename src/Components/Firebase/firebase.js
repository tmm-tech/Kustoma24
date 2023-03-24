// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJUXpw4NHMFXSCrJ99QE7eSueqa6FdigE",
  authDomain: "kustoma24-8959e.firebaseapp.com",
  projectId: "kustoma24-8959e",
  storageBucket: "kustoma24-8959e.appspot.com",
  messagingSenderId: "25649783768",
  appId: "1:25649783768:web:b9e5e2477e84d0407e88ad",
  measurementId: "G-85C5W0X34Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)