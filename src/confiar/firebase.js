// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6y0Le-32oWm73Il1V-aUHcESL5gCBWPg",
  authDomain: "chat-live-69d03.firebaseapp.com",
  projectId: "chat-live-69d03",
  storageBucket: "chat-live-69d03.appspot.com",
  messagingSenderId: "13940986924",
  appId: "1:13940986924:web:8e673b02a9ff225631ad89",
  measurementId: "G-NQ5YEK0JWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)