// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpFNyNDSO1NeSOMnWbeZ9x38T_IsIyIoM",
  authDomain: "checkd-42487.firebaseapp.com",
  projectId: "checkd-42487",
  storageBucket: "checkd-42487.appspot.com",
  messagingSenderId: "842684778997",
  appId: "1:842684778997:web:aa7af173c083050174f8bc",
  measurementId: "G-TL7NFKNFZZ"
};

// Initialize Firebase
const app = (getApps().length) ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);