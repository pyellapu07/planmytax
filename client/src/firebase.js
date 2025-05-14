import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Add Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBxYJerOCMYvIFS_ByQT9BdpcKQCcvXvPA",
  authDomain: "plan-my-tax-5ef29.firebaseapp.com",
  projectId: "plan-my-tax-5ef29",
  storageBucket: "plan-my-tax-5ef29.appspot.com",
  messagingSenderId: "957053363172",
  appId: "1:957053363172:web:7745553a967480615889df1",
  measurementId: "G-J07VRBLQZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app); // ✅ Firestore instance

export { auth, provider, db };
