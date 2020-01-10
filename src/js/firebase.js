// import * as firebase from 'firebase/app';
// import 'firebase/database';

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


// const randomId = () => {
// 	return '_' + Math.random().toString(36).slice(2);
// };

// Add config data here
// var firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   databaseURL: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: ""
// };

// firebase.initializeApp(firebaseConfig);

// const firebaseDB = firebase.database();

firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

var db = firebase.firestore();