import { getStorage, ref } from "firebase/storage";
import 'firebase/storage';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//import pour auth 
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
//import the database
import { getFirestore } from '@firebase/firestore';

import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//key and configuration variable for firebase

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_KEY,
    authDomain: "kite-app-greece.firebaseapp.com",
    projectId: "kite-app-greece",
    storageBucket: "gs://kite-app-greece.appspot.com/",
    messagingSenderId: "470329778306",
    appId: "1:470329778306:web:097c06166df3c4b2f9d49b",
    measurementId: "G-WW6FVWNVSZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//google analityc
const analytics = getAnalytics(app);

//connect the database
export const db = getFirestore(app);

//variable d'auth
export const auth = getAuth(app)

//provider
export const provider = new GoogleAuthProvider();

export const storage = getStorage(app);

