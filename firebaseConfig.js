// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEc5nAWHl4iFhepWnobip8nPjtFr9Alm4",
  authDomain: "krira-beta.firebaseapp.com",
  projectId: "krira-beta",
  storageBucket: "krira-beta.appspot.com",
  messagingSenderId: "248770646886",
  appId: "1:248770646886:web:d8d81811bfdb97c29f2ea7",
  measurementId: "G-WPHYCT1SJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export const auth = getAuth(app);


export { db };
