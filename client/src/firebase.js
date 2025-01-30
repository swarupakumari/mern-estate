// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4a9e1.firebaseapp.com",
  projectId: "mern-estate-4a9e1",
  storageBucket: "mern-estate-4a9e1.firebasestorage.app",
  messagingSenderId: "1045308074906",
  appId: "1:1045308074906:web:cacc03dd7dcd62ce052823",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
