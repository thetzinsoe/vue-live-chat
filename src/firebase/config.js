import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB_z-vUnPGSogNY5n798Hje7HalA9VbDJM",
  authDomain: "t-chat-cf8dd.firebaseapp.com",
  projectId: "t-chat-cf8dd",
  storageBucket: "t-chat-cf8dd.firebasestorage.app",
  messagingSenderId: "170262848116",
  appId: "1:170262848116:web:66767c788cd8553f60e721",
  measurementId: "G-BFL9WP96FQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, app };
