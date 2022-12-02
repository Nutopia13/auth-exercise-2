
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsJOSZKSRMgxlhYFcq4bHpFVKEqAvZhHc",
  authDomain: "auth-exrecise2.firebaseapp.com",
  projectId: "auth-exrecise2",
  storageBucket: "auth-exrecise2.appspot.com",
  messagingSenderId: "939741983496",
  appId: "1:939741983496:web:72da74cbc31d415c7472bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {auth, db}; 