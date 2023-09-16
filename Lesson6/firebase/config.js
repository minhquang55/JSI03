import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbAg8oKC2zmaTjUKn3wMGt5aKnhYjZNzI",
  authDomain: "jsi03-3d0ea.firebaseapp.com",
  projectId: "jsi03-3d0ea",
  storageBucket: "jsi03-3d0ea.appspot.com",
  messagingSenderId: "1098118080864",
  appId: "1:1098118080864:web:d1fca3ca7e8c7650f55605",
  measurementId: "G-NHSQCKGVFY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
