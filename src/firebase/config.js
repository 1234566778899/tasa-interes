import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAr8mxjR2rmYTHgSTJs629Sq9UCiPPM55I",
    authDomain: "finanzasapp-32977.firebaseapp.com",
    projectId: "finanzasapp-32977",
    storageBucket: "finanzasapp-32977.appspot.com",
    messagingSenderId: "574666306779",
    appId: "1:574666306779:web:db0364d051f4fb20a908fe",
    measurementId: "G-QJLPHXJKG8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;