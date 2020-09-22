import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// Add credentials provided by firebase after creating a firebase web app here

const firebaseConfig = {
    apiKey: "Enter API Key",
    authDomain: "Enter authDomain details",
    databaseURL: "Enter database URL details",
    projectId: "Project ID",
    storageBucket: "Storage bucket",
    messagingSenderId: "--",
    appId: "--",
    measurementId: "--"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
