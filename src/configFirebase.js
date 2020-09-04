const admin = require("firebase-admin");
const firebase = require('firebase')


const serviceAccount = require("./parcial2-284d6-firebase-adminsdk-dsjbo-d98227fcec.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://parcial2-284d6.firebaseio.com"
});

var firebaseConfig = {
  apiKey: "AIzaSyCJXg4sEUnGQuOHeI7F6fBIWL9edui8A_I",
  authDomain: "parcial2-284d6.firebaseapp.com",
  databaseURL: "https://parcial2-284d6.firebaseio.com",
  projectId: "parcial2-284d6",
  storageBucket: "parcial2-284d6.appspot.com",
  messagingSenderId: "712869871815",
  appId: "1:712869871815:web:8cf6f33b805f4df4423ee2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = { admin, firebase };