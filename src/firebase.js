
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDI8342vhn7TFqb-ax8bfADSlKYe6x9KGg",
  authDomain: "pizza-724b7.firebaseapp.com",
  projectId: "pizza-724b7",
  storageBucket: "pizza-724b7.appspot.com",
  messagingSenderId: "1006165653630",
  appId: "1:1006165653630:web:dc881e8cf114348b79402f"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app
export const firestore = getFirestore()
export const auth = getAuth();


  
