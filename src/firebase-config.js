// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//import pour auth 
import { getAuth } from 'firebase/auth'
//import the database
import { getFirestore } from '@firebase/firestore';

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//key and configuration variable for firebase

const firebaseConfig = {
    apiKey: "AIzaSyBr7a2zslWAlJfvQuwnTuGbFriRbfaM4w0",
    authDomain: "kite-app-greece.firebaseapp.com",
    projectId: "kite-app-greece",
    storageBucket: "kite-app-greece.appspot.com",
    messagingSenderId: "470329778306",
    appId: "1:470329778306:web:097c06166df3c4b2f9d49b",
    measurementId: "G-WW6FVWNVSZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//connect the database
export const db = getFirestore();

//variable d'auth
export const auth = getAuth(app)