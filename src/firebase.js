  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBMUztJKchINJecTxzWD_EbBfAhuCgs5e0",
    authDomain: "todo-app-react-475f2.firebaseapp.com",
    databaseURL: "https://todo-app-react-475f2.firebaseio.com",
    projectId: "todo-app-react-475f2",
    storageBucket: "todo-app-react-475f2.appspot.com",
    messagingSenderId: "792480413294",
    appId: "1:792480413294:web:bc247f3471ad1a6dca987f",
    measurementId: "G-5KVXVEF6VC"
  });
  
  const db = firebase.firestore();

  export default db;