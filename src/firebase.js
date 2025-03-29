// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBdAyenGX225dwb67FI1oWdTwjzkud4-Sw",
    authDomain: "testcursor-96768.firebaseapp.com",
    projectId: "testcursor-96768",
    storageBucket: "testcursor-96768.firebasestorage.app",
    messagingSenderId: "485490454126",
    appId: "1:485490454126:web:dae2cb7bc3e318c154c07f",
    measurementId: "G-D6KFLLSYMF"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };