// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO9vYHIgqpNbgaalAQDIdjYejU2LJto0o",
  authDomain: "dragon-news-client-b8a38.firebaseapp.com",
  projectId: "dragon-news-client-b8a38",
  storageBucket: "dragon-news-client-b8a38.appspot.com",
  messagingSenderId: "219775992438",
  appId: "1:219775992438:web:96afa1ee2a8bb717bd1557"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;