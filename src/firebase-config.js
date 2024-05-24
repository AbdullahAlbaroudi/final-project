// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAziKuPBWs2wutalrOF2Bn3szanZ7xFfiI",
  authDomain: "baro-tools-1fc18.firebaseapp.com",
  projectId: "baro-tools-1fc18",
  storageBucket: "baro-tools-1fc18.appspot.com",
  messagingSenderId: "847595801788",
  appId: "1:847595801788:web:21ffaea14a2df38ef7d4b9",
  measurementId: "G-916K2455HN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
