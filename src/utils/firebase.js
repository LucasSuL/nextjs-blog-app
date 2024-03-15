// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-78b50.firebaseapp.com",
  projectId: "blog-78b50",
  storageBucket: "blog-78b50.appspot.com",
  messagingSenderId: "458520647524",
  appId: "1:458520647524:web:1ec3ff214c88ec4e834c71"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

