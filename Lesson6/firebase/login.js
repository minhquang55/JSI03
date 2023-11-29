import { auth } from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const usernameElm = document.getElementById("username");
const passwordElm = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

const handleLogin = () => {
  const email = usernameElm.value;
  const password = passwordElm.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const email = user.email;
      const displayName = user.displayName;
      const photoUrl = user.photoURL;
      const userProfile = {
        email,
        displayName,
        photoUrl,
      };
      localStorage.setItem("currentUser", JSON.stringify(userProfile));
      window.location = "./index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode);
    });
};

loginBtn.addEventListener("click", handleLogin);
