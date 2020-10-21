import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAiTWh2xAl-SPENryx1A2OXOY7x67dfqQ",
  authDomain: "instagram-clone-react-d37c2.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-d37c2.firebaseio.com",
  projectId: "instagram-clone-react-d37c2",
  storageBucket: "instagram-clone-react-d37c2.appspot.com",
  messagingSenderId: "322661131373",
  appId: "1:322661131373:web:7be6aa5a484db217544b64",
  measurementId: "G-YQ6MVX2L0K", 
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
