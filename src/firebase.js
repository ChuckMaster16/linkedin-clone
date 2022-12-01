import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEnsvw5XxCLmN3WcDMHQRSGEGOqOCNT48",
    authDomain: "linkedinclone-58ba5.firebaseapp.com",
    projectId: "linkedinclone-58ba5",
    storageBucket: "linkedinclone-58ba5.appspot.com",
    messagingSenderId: "459740329741",
    appId: "1:459740329741:web:dbc47cb95baa6721042244",
    measurementId: "G-MBBTXGFVZ3"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  const storage= firebase.storage();

  export {auth, provider, storage};
  export default db;