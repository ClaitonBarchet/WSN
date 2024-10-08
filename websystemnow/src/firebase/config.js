import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjPsl2QjYzHMLCepxkX_GceAnGGt_xWks",
  authDomain: "asdb-cbd1c.firebaseapp.com",
  projectId: "asdb-cbd1c",
  storageBucket: "asdb-cbd1c.appspot.com",
  messagingSenderId: "978640831413",
  appId: "1:978640831413:web:63ed17475bd7c40128cffc",
  measurementId: "G-YF3CZJZNN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };
export default app;