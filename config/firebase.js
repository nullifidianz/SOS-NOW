// Import the functions you need from the SDKs you need
import firebase from "firebase";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_KEY_HERE",
  authDomain: "YOUR_KEY_HERE,
  databaseURL: "YOUR_KEY_HERE",
  projectId: "YOUR_KEY_HERE,
  storageBucket: "YOUR_KEY_HERE,
  messagingSenderId: "YOUR_KEY_HERE",
  appId: "YOUR_KEY_HERE",
  measurementId: "YOUR_KEY_HERE"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
