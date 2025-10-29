// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 👈 Firestore import kiya

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA97HoTdKmTFD2EbvtMjuTpf5VqgvoclRw",
  authDomain: "react-firebase-fe0ae.firebaseapp.com",
  projectId: "react-firebase-fe0ae",
  storageBucket: "react-firebase-fe0ae.firebasestorage.app",
  messagingSenderId: "459160849819",
  appId: "1:459160849819:web:529ce5a4d9b3448ff0653e",
  measurementId: "G-TJ3K1CXQN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // 👈 Firestore database initialize kiya

// Export firebase app, analytics, and db
export { analytics, app, db }; // 👈 yahan db export kiya

