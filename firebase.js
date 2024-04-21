// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB-RSZfN65eHJn2FvwfNzzuKq9YqakpwdM",
  authDomain: "rentandride-6f7b7.firebaseapp.com",
  projectId: "rentandride-6f7b7",
  storageBucket: "rentandride-6f7b7.appspot.com",
  messagingSenderId: "1011811187795",
  appId: "1:1011811187795:web:ecbe2c9de245ad4f859aa6",
  measurementId: "G-2M5T3J6H39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
export {auth,db}