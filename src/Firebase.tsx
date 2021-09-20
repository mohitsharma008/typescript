import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXbpUxQVvS37WI2E4R3F3M1yHopiK9K1I",

  authDomain: "updates-manange.firebaseapp.com",

  projectId: "updates-manange",

  storageBucket: "updates-manange.appspot.com",

  messagingSenderId: "766745805570",

  appId: "1:766745805570:web:521a6bd7df890bd0d3781b",
};
const app = firebase.initializeApp(firebaseConfig);
export const authOne = app.auth();
export default app;
// export default app;
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
