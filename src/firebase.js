// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqIeldW3ul5u4k0lBcDWZ2wtwqqVXYm1o",
  authDomain: "inoovative-engineering.firebaseapp.com",
  projectId: "inoovative-engineering",
  storageBucket: "inoovative-engineering.firebasestorage.app",
  messagingSenderId: "997355881276",
  appId: "1:997355881276:web:28ea411d617597b078d439",
  measurementId: "G-N3NP7KZELY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
