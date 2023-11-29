import { updateProfile } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { auth } from "./config.js";

const name = document.getElementById("name");
const photo = document.getElementById("photo");
const submitBtn = document.getElementById("submit-btn");

const handleUpdateProfile = () => {
  updateProfile(auth.currentUser, {
    displayName: name.value,
    photoURL: photo.value,
  })
    .then(() => {
      alert("Update thanh cong");
    })
    .catch((error) => {
      alert(error.code);
    });
};

submitBtn.addEventListener("click", handleUpdateProfile);
