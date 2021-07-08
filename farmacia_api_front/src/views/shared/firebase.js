import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCHTSkyxZK0d1HPg2IjUq1QXqrTD3e7vmI",
    authDomain: "autenticafarmacia.firebaseapp.com",
    projectId: "autenticafarmacia",
    storageBucket: "autenticafarmacia.appspot.com",
    messagingSenderId: "1064356372548",
    appId: "1:1064356372548:web:38293583e0a66afd20dc11"
  };
  // Initialize Firebase
  export const firebaseUtil = firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();