import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { auth } from "./config.js";

const handleGetProfile = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.displayName);
    }
  });
};

handleGetProfile();