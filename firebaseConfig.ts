// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXNIcZiwLJvVI3k5T1OE_y8GaMu_MqKLc",
  authDomain: "babylon-login-42b3b.firebaseapp.com",
  projectId: "babylon-login-42b3b",
  storageBucket: "babylon-login-42b3b.firebasestorage.app",
  messagingSenderId: "13019003178",
  appId: "1:13019003178:web:cf58034a412a6dd055c653"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);