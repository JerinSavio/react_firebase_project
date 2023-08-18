// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiaZocUcwnY0ZIpz7EdOKCpLBzWv-6ZyI",
  authDomain: "my-react-firebase-projec-8f6e0.firebaseapp.com",
  projectId: "my-react-firebase-projec-8f6e0",
  storageBucket: "my-react-firebase-projec-8f6e0.appspot.com",
  messagingSenderId: "762532178208",
  appId: "1:762532178208:web:13433289616737dce00f45",
  measurementId: "G-HX9XKZW28M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
