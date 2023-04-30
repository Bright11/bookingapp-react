// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBpML2ZQ88NbRJYAp5xu8HsFV8aJgRlu_Q",
  authDomain: "bookingapp-4dd4a.firebaseapp.com",
  projectId: "bookingapp-4dd4a",
  storageBucket: "bookingapp-4dd4a.appspot.com",
  messagingSenderId: "222689769085",
  appId: "1:222689769085:web:f253516ef609850d68a314",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app)
export { db, storage };
