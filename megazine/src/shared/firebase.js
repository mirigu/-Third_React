import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzZ5EzLPsYXddSkkr_mKBEIr3P3PjSnNM",
  authDomain: "megazine-11a01.firebaseapp.com",
  projectId: "megazine-11a01",
  storageBucket: "megazine-11a01.appspot.com",
  messagingSenderId: "245997687828",
  appId: "1:245997687828:web:cf0662d55b32f24c00c301",
  measurementId: "G-M7EEV328Q6",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();

export { auth, apiKey };
