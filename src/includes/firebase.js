import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTa75g2NBTmKODtO7bIdZE5wilc-_l4EU",
  authDomain: "movies-vue-20d88.firebaseapp.com",
  projectId: "movies-vue-20d88",
  storageBucket: "movies-vue-20d88.appspot.com",
  appId: "1:636106236586:web:c915f4f9ea1fe0460626d3",
};

//initialize app
firebase.initializeApp(firebaseConfig);
//references to services
const auth = firebase.auth();
const db = firebase.firestore();
//creating users collection
const usersCollection = db.collection("users");

export { auth, db, usersCollection };
