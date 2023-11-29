import { db } from "./config.js";
import {
  collection,
  query,
  getDocs,
  addDoc,
  serverTimestamp,
  orderBy,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

let messageList = [];
// ref la dia chi cua kho
const ref = collection(db, "messages");
const q = query(ref, orderBy("createdAt"));

// Them tin nhan su dung firebase
const inputMessage = document.getElementById("message");
const sendBtn = document.getElementById("send-btn");
const addMessage = async () => {
  const message = inputMessage.value;
  const sender = localStorage.getItem('currentUser');
  const userProfile = JSON.parse(sender);
  await addDoc(ref, {
    content: message,
    sender: userProfile.displayName ? userProfile.displayName : userProfile.email,
    createdAt: serverTimestamp(),
  });
};

sendBtn.addEventListener("click", addMessage);

// Render data ra giao dien
const wrapperMessage = document.getElementById("messages-list");
const renderMessage = () => {
  wrapperMessage.innerHTML = "";
  messageList.forEach((message) => {
    const msgElm = document.createElement("p");
    msgElm.textContent = message.content;
    wrapperMessage.appendChild(msgElm);
  });
};

// Lang nghe thay doi data tu firebase
onSnapshot(q, (querySnapshot) => {
  messageList = []
  querySnapshot.forEach((doc) => {
    messageList.push(doc.data());
  });
  renderMessage();
});
