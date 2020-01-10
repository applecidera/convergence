import * as firebase from 'firebase/app';
import 'firebase/database';

const randomId = () => {
	return '_' + Math.random().toString(36).slice(2);
};

// Add config data here
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();