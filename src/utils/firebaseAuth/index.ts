import firebase, { FirebaseError } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyy16LnICw-2tGLqtAPbotujq8N58sL-8",
  authDomain: "lazy-diary.firebaseapp.com",
  databaseURL: "https://lazy-diary.firebaseio.com",
  projectId: "lazy-diary",
  storageBucket: "lazy-diary.appspot.com",
  messagingSenderId: "126252487591",
  appId: "1:126252487591:web:1f24a8c20d8481f9cf5c82"
};
firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();

export const getFieldNameAndMessageFromError = (error: FirebaseError) => {
  let fieldName = "";
  switch (error.code) {
    case "auth/email-already-in-use":
    case "auth/invalid-email":
    case "auth/user-not-found":
      fieldName = "email";
      break;
    case "auth/weak-password":
    case "auth/wrong-password":
      fieldName = "password";
      break;
  }
  return [fieldName, error.message];
};
