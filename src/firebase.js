// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7CuRQlG0xTiimgaoK5MotcCe2AOTJBXE",
  authDomain: "monsterbox-a6e35.firebaseapp.com",
  projectId: "monsterbox-a6e35",
  storageBucket: "monsterbox-a6e35.firebasestorage.app",
  messagingSenderId: "650303580955",
  appId: "1:650303580955:web:e6316fe0056f7b8e8981be",
  measurementId: "G-H6M5PHFN8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);