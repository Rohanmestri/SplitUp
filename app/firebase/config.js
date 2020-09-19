import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBstJDkLyQh1QYnwBAD8LWS6CMLyg3zO00",
    authDomain: "splitupdb.firebaseapp.com",
    databaseURL: "https://splitupdb.firebaseio.com",
    projectId: "splitupdb",
    storageBucket: "splitupdb.appspot.com",
    messagingSenderId: "661161791622",
    appId: "1:661161791622:web:6dae9a4c3384ddd0cb4107",
    measurementId: "G-6XZGSQ9ENR"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };