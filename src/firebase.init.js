// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2UbDAFLXAd8SIVv9rv4zOq-mx0XSe5TI",
  authDomain: "email-password-auth-f6f7d.firebaseapp.com",
  projectId: "email-password-auth-f6f7d",
  storageBucket: "email-password-auth-f6f7d.appspot.com",
  messagingSenderId: "108055811338",
  appId: "1:108055811338:web:18a6ddafbb9a7ba0ab56f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;