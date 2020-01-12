import * as firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBCBSXwc_rh85sCAfvOuvJ2BUMJxep1kxk",
  authDomain: "convergence-16byte.firebaseapp.com",
  databaseURL: "https://convergence-16byte.firebaseio.com",
  projectId: "convergence-16byte",
  storageBucket: "convergence-16byte.appspot.com",
  messagingSenderId: "491691374635",
  appId: "1:491691374635:web:780756555a50fa5267926e",
  measurementId: "G-Q6CRPM2K5F"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

const randomId = () => {
	return '_' + Math.random().toString(36).slice(2);
};

export const postHighScore = (name, time) =>{
  const highScore = db.ref('highScores/' + randomId());
  highScore.set({name, time});
}


const fetchHighScores = function(){
  const highScores = db.collection('highScores');

}
