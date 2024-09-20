
// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Firestore import

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5XKBqRj0-B8Ie4HC7dvvarF8bQlWmg0k",
  authDomain: "vanlife-carrental-app2-auth.firebaseapp.com",
  projectId: "vanlife-carrental-app2-auth",
  storageBucket: "vanlife-carrental-app2-auth.appspot.com",
  messagingSenderId: "87936558698",
  appId: "1:87936558698:web:c2b8f34fc2aea679144c13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore (for database)
const db = getFirestore(app);

export { auth, db };
