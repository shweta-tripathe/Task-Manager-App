import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAap4V5Q_UTJcQSCe0Vxjql_v3Xh7mBQ4w",
    authDomain: "task-manager1-app.firebaseapp.com",
    projectId: "task-manager1-app",
    storageBucket: "task-manager1-app.appspot.com",
    messagingSenderId: "965491072077",
    appId: "1:965491072077:web:3644f7dc0c970231161004"
  };

  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db} 