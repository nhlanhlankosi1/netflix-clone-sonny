import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDL7FkU-pS_n7QHqZ19GdazxXKDhw9O7sw",
  authDomain: "netflix-clone-f8d43.firebaseapp.com",
  projectId: "netflix-clone-f8d43",
  storageBucket: "netflix-clone-f8d43.appspot.com",
  messagingSenderId: "82281712915",
  appId: "1:82281712915:web:3646212ddba5c77ccbdee6",
  measurementId: "G-ES2NGLFH8V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth };
export default db;
