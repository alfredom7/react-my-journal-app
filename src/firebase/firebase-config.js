import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCfVFGvVW3lJP-QG-CgsYkcEL0Rsuxl_JU",
    authDomain: "react-app-cursos-58e23.firebaseapp.com",
    projectId: "react-app-cursos-58e23",
    storageBucket: "react-app-cursos-58e23.appspot.com",
    messagingSenderId: "832513286749",
    appId: "1:832513286749:web:677028c029f950ba4323b4"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}