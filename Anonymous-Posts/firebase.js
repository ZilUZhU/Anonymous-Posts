import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeEvVMthlX2OdrEEvWV3l7w5et_0fLEoM",
  authDomain: "anonymous-posts-ad60d.firebaseapp.com",
  projectId: "anonymous-posts-ad60d",
  storageBucket: "anonymous-posts-ad60d.appspot.com",
  messagingSenderId: "905535572264",
  appId: "1:905535572264:web:6f12022f5cbbb38c24281d",
  measurementId: "G-JV50XZG4MK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
const auth = getAuth(app);
export { auth, db };