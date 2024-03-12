import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7JwRw7n7knfy0rmFM1IXBZziDy0psVOY",
  authDomain: "expensetracker-6b043.firebaseapp.com",
  projectId: "expensetracker-6b043",
  storageBucket: "expensetracker-6b043.appspot.com",
  messagingSenderId: "386655380597",
  appId: "1:386655380597:web:c467f32023dd70b60bc43c",
  measurementId: "G-7EZ1SNDGV4"
};
  
initializeApp(firebaseConfig);

const db = getFirestore();
export default db
