import Rebase from "re-base";
import firebase from "firebase";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAzRIjMkndwr2dXBWZI28T33LIt3LauI6E",
  authDomain: "catch-of-the-day-tigran91.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-tigran91.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }; // Named export
export default base; // Default export
