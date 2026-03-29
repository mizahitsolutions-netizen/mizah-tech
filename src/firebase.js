// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfEr_usmiIKILZsq7s_nxfuiDO57yG3-M",
  authDomain: "mizah-tech.firebaseapp.com",
  projectId: "mizah-tech",
  storageBucket: "mizah-tech.firebasestorage.app",
  messagingSenderId: "1008098742070",
  appId: "1:1008098742070:web:5ce46b5e4d7d6218e32d97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const functions = getFunctions(app);