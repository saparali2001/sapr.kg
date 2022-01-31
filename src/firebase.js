
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEtJJm-HrDzif2OJrXQOesAerub-oxPUw",
  authDomain: "sapar-kg.firebaseapp.com",
  projectId: "sapar-kg",
  storageBucket: "sapar-kg.appspot.com",
  messagingSenderId: "650720476922",
  appId: "1:650720476922:web:d2762ad4a2aa9a6bcfd343",
  measurementId: "G-99MF693LPD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app
export const firestore = getFirestore()
export const auth = getAuth();