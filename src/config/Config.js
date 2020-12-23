import  firebase from 'firebase'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAI_Ctm7QcB5nk6E5mssgfE3arni5eQMu8",
    authDomain: "e-commerce-421dc.firebaseapp.com",
    projectId: "e-commerce-421dc",
    storageBucket: "e-commerce-421dc.appspot.com",
    messagingSenderId: "385868149863",
    appId: "1:385868149863:web:d05ca501e73c315a4190c2"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }