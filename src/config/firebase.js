import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyC8eDEt7kqGEO5BDyenAtKpnjSv4Ap7bm8",
  authDomain: "modul-9-c85ad.firebaseapp.com",
  projectId: "modul-9-c85ad",
  storageBucket: "modul-9-c85ad.appspot.com",
  messagingSenderId: "204422171427",
  appId: "1:204422171427:web:b8c637fa4daf3534069a96"
});

const FIREBASE = firebase;

export default FIREBASE;