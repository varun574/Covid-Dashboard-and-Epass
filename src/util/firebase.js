import firebase from 'firebase'
import 'firebase/storage'
var firebaseConfig = {
    apiKey: "AIzaSyCQFROmkZ-6Kjub7rmyRH9RuFG_xqQuxS4",
    authDomain: "covidepass-b194f.firebaseapp.com",
    projectId: "covidepass-b194f",
    storageBucket: "covidepass-b194f.appspot.com",
    messagingSenderId: "480580831317",
    appId: "1:480580831317:web:b29d264c6ed1b2fa902cdc",
    measurementId: "G-3DCVZP3HEH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase