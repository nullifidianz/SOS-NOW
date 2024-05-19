// Import the functions you need from the SDKs you need
import firebase from "firebase";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5DH7s3eMAUomN8eQP5idvPC3mzgPkX-E",
  authDomain: "sos-rs-1151e.firebaseapp.com",
  databaseURL: "https://sos-rs-1151e-default-rtdb.firebaseio.com",
  projectId: "sos-rs-1151e",
  storageBucket: "sos-rs-1151e.appspot.com",
  messagingSenderId: "872510135862",
  appId: "1:872510135862:web:a2ccbb4b5f5fd124fbc297",
  measurementId: "G-M72CWMV77L"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;