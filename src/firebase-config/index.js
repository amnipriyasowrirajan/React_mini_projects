import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOLU_ss-BHt63FALnqKls2HgtN9eZKwLM",
  authDomain: "react-mini-project-firebase.firebaseapp.com",
  projectId: "react-mini-project-firebase",
  storageBucket: "react-mini-project-firebase.appspot.com",
  messagingSenderId: "119913934296",
  appId: "1:119913934296:web:ed6c07048093ae3675d6ad",
  measurementId: "G-FZQZ5EXRS6",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
