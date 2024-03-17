import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOLU_ss-BHt63FALnqKls2HgtN9eZKwLM",
  authDomain: "react-mini-project-firebase.firebaseapp.com",
  projectId: "react-mini-project-firebase",
  storageBucket: "react-mini-project-firebase.appspot.com",
  messagingSenderId: "119913934296",
  appId: "1:119913934296:web:ed6c07048093ae3675d6ad",
  measurementId: "G-FZQZ5EXRS6",
};

// const firebaseApp = initializeApp(firebaseConfig);
// export const db = getFirestore(firebaseApp);
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

async function loginUsingEmailAndPassword(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
}

async function registerUsingEmailAndPassword(name, email, password) {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
  }
}

function logout() {
  signOut(auth);
}

export {
  auth,
  loginUsingEmailAndPassword,
  logout,
  registerUsingEmailAndPassword,
};
