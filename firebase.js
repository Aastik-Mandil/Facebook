import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC3iyL0ZDiC8AlycAnZTzvViVVSplBc-rw",
    authDomain: "facebook-ee2cc.firebaseapp.com",
    projectId: "facebook-ee2cc",
    storageBucket: "facebook-ee2cc.appspot.com",
    messagingSenderId: "763926949900",
    appId: "1:763926949900:web:77c85fe5ac70110dd83e29",
    measurementId: "G-N10XR6CSBE"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };