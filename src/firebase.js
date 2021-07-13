import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBn4edhmrvf7LgTsuISxJ4PQvcIGXdLSyw",
    authDomain: "unichat-73786.firebaseapp.com",
    projectId: "unichat-73786",
    storageBucket: "unichat-73786.appspot.com",
    messagingSenderId: "31038494957",
    appId: "1:31038494957:web:a6fb414720fdd9435bd4e4",
  })
  .auth();
