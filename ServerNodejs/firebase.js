// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQcq8YyXXBzJCdG55oYoXL7hWDSvlpNcs",
  authDomain: "civicfeeds-15f12.firebaseapp.com",
  projectId: "civicfeeds-15f12",
  storageBucket: "civicfeeds-15f12.appspot.com",
  messagingSenderId: "913364134132",
  appId: "1:913364134132:web:4ceb4dbab71135392656a1",
  measurementId: "G-K826PWQ1JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);