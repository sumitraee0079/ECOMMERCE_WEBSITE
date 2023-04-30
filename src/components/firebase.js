/*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhpJP3F4cDds0gI4M7KZlAbgJwFo7j4kI",
  authDomain: "react-http-2f30c.firebaseapp.com",
  databaseURL: "https://react-http-2f30c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-http-2f30c",
  storageBucket: "react-http-2f30c.appspot.com",
  messagingSenderId: "232529792693",
  appId: "1:232529792693:web:88df76c30f5d36aae1f8fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app) */


// Import the functions you need from the SDKs you need

import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBaD2DXP8333fAXZo3GU37C-TsvGrRBd30",
  authDomain: "fir-upload-75baa.firebaseapp.com",
  projectId: "fir-upload-75baa",
  storageBucket: "fir-upload-75baa.appspot.com",
  messagingSenderId: "456405814220",
  appId: "1:456405814220:web:7f30e24036da5e7d9eab69"
});

// Initialize Firebase

var db = firebaseConfig.firestore();

export { db };