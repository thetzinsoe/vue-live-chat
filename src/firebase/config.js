import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAcQNob5fSZ3WCoWQilkjgkHrajztgFDQs",
  authDomain: "t-blog-vue.firebaseapp.com",
  projectId: "t-blog-vue",
  storageBucket: "t-blog-vue.appspot.com",
  messagingSenderId: "52346415619",
  appId: "1:52346415619:web:89d7546e9f9c92a3c9fc36",
  measurementId: "G-PSKTGZ2FFL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, app };
