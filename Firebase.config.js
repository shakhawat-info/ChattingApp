// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC4NyW11IIIyDzCaKbmfEVMSVkm-sVXTI",
  authDomain: "chattingapp-e9a2c.firebaseapp.com",
  databaseURL: "https://chattingapp-e9a2c-default-rtdb.firebaseio.com",
  projectId: "chattingapp-e9a2c",
  storageBucket: "chattingapp-e9a2c.firebasestorage.app",
  messagingSenderId: "96065505304",
  appId: "1:96065505304:web:b7455d77ec08f56d739b6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;