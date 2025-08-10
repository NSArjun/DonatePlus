// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBEuNcuybKE3sGB8bOfmZW62uAzdqacT4",
  authDomain: "donateplus-8caab.firebaseapp.com",
  projectId: "donateplus-8caab",
  storageBucket: "donateplus-8caab.firebasestorage.app",
  messagingSenderId: "73375032094",
  appId: "1:73375032094:web:9da80f01b51e1a01a19f0f",
  measurementId: "G-7Y1L52YWXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
export default app;