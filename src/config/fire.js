import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBQPc7E_Lf4ezl-xASjvEXEPVM8L09kO5w",
    authDomain: "ksoma-yt.firebaseapp.com",
    databaseURL: "https://ksoma-yt.firebaseio.com",
    projectId: "ksoma-yt",
    storageBucket: "",
    messagingSenderId: "173731428675"
  };
const fire = firebase.initializeApp(config);
const database = firebase.database();


export default fire;