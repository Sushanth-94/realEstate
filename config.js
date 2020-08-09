import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCp6E5nn_acJn88Q3RVG4XVQOMW_R6uR3M",
    authDomain: "realestate-e2342.firebaseapp.com",
    databaseURL: "https://realestate-e2342.firebaseio.com",
    projectId: "realestate-e2342",
    storageBucket: "realestate-e2342.appspot.com",
    messagingSenderId: "1059634927221",
    appId: "1:1059634927221:web:a00ad78199bf5c64ff4a3c",
    measurementId: "G-C6XQ9K2GVV"
  };

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;