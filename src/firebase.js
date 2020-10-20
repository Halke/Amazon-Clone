import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDEubK4WYWBqFFHPDTSXgDXz9rRAAJA3ys",
  authDomain: "clone-halke.firebaseapp.com",
  databaseURL: "https://clone-halke.firebaseio.com",
  projectId: "clone-halke",
  storageBucket: "clone-halke.appspot.com",
  messagingSenderId: "364667955702",
  appId: "1:364667955702:web:e1e0341d92a690d812ffd7",
  measurementId: "G-TYYXW51S99",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
