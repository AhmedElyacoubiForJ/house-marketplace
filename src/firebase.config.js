import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6iIyJFTPdn-elvE3qVrk1nSiBnke16Ec",
  authDomain: "house-marketplace-app-d1e71.firebaseapp.com",
  projectId: "house-marketplace-app-d1e71",
  storageBucket: "house-marketplace-app-d1e71.appspot.com",
  messagingSenderId: "173955361376",
  appId: "1:173955361376:web:914e5adff5a850f0107105"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);