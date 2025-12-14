// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIM_11tWhqSVJLWwS1aZ-7SbRQOuBUE8Y",
  authDomain: "blood-donation-33ad7.firebaseapp.com",
  projectId: "blood-donation-33ad7",
  storageBucket: "blood-donation-33ad7.firebasestorage.app",
  messagingSenderId: "174122879290",
  appId: "1:174122879290:web:a4af2bab64db97691fe803"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);