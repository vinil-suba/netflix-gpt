// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyApSeW2n_gW6v5savufK_QXgGulLjP3HxM",
  authDomain: "netflix-gpt-clone-ae4c7.firebaseapp.com",
  projectId: "netflix-gpt-clone-ae4c7",
  storageBucket: "netflix-gpt-clone-ae4c7.appspot.com",
  messagingSenderId: "883137152644",
  appId: "1:883137152644:web:03cc1600e26bf197e2a4d1",
  measurementId: "G-73QCQFF7E4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);


export const auth = getAuth();