import React from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaMK-zFUhCxPCedp6hoqlc-btoC9fr76I",
  authDomain: "dilsah-app-auth.firebaseapp.com",
  projectId: "dilsah-app-auth",
  storageBucket: "dilsah-app-auth.appspot.com",
  messagingSenderId: "364885925389",
  appId: "1:364885925389:web:b54f5aa77f2e34d85abf44",
  measurementId: "G-5864GH5VT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export{app,auth}






const Firebase = () => {
  return (
    <div>Firebase</div>
  )
}

export default Firebase