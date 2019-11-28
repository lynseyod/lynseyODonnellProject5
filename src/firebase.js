import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBWbGE_tMKtAzZ6-naRB90pgQmIYLdiWNU",
    authDomain: "addy-app-6b294.firebaseapp.com",
    databaseURL: "https://addy-app-6b294.firebaseio.com",
    projectId: "addy-app-6b294",
    storageBucket: "addy-app-6b294.appspot.com",
    messagingSenderId: "833732872885",
    appId: "1:833732872885:web:500f0df2589d67ff2a8cfc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase