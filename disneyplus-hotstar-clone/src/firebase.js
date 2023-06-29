import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB8N-My0VqklY6IYqnFGN5TdVIMgJKFXcM",
  authDomain: "cherry-disneyplus-hotstar.firebaseapp.com",
  projectId: "cherry-disneyplus-hotstar",
  storageBucket: "cherry-disneyplus-hotstar.appspot.com",
  messagingSenderId: "719678684256",
  appId: "1:719678684256:web:fc3cf0c43c01a52bb75705",
  measurementId: "G-2P0D3YG1NL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); // Use a specific provider like GoogleAuthProvider()
const storage = firebase.storage();

export { auth, provider, storage };
export default db;