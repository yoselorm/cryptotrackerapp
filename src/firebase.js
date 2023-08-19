// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtxE7JY2-hHMRGWNd4-51MBPIaC1BUEY8",
    authDomain: "cryptofolio-aaa31.firebaseapp.com",
    projectId: "cryptofolio-aaa31",
    storageBucket: "cryptofolio-aaa31.appspot.com",
    messagingSenderId: "1020439230712",
    appId: "1:1020439230712:web:5081411c5da98b4475630d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app; 