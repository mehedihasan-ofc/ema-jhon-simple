// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZmtm43q2eMx5R6MKOGkML3gq1qTkbzTM",
    authDomain: "ema-john-with-firebase-a-e33a5.firebaseapp.com",
    projectId: "ema-john-with-firebase-a-e33a5",
    storageBucket: "ema-john-with-firebase-a-e33a5.appspot.com",
    messagingSenderId: "57154332076",
    appId: "1:57154332076:web:6d28d54970e8199db1c609"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;