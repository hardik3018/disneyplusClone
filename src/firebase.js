import firebase from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ50iBiW07zLlzVWLtGOGFbHkUAW15eYQ",
  authDomain: "disneyplus-clone-5fe9e.firebaseapp.com",
  projectId: "disneyplus-clone-5fe9e",
  storageBucket: "disneyplus-clone-5fe9e.appspot.com",
  messagingSenderId: "383849546638",
  appId: "1:383849546638:web:9806a3ea14c811a2911adf",
  measurementId: "G-ZH3M5T57Z6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const analytics = firebase.getAnalytics(firebaseApp);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
