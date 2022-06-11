// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbp6pmfXNNHc37EziVs8P9wYcQPD5CxLE",
  authDomain: "vooting-auth.firebaseapp.com",
  projectId: "vooting-auth",
  storageBucket: "vooting-auth.appspot.com",
  messagingSenderId: "475772314384",
  appId: "1:475772314384:web:90efdd41ec12fb5b7c3b95",
  measurementId: "G-1ZKFQEPDLG",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
// export default firebase;
// const analytics = getAnalytics(app);
