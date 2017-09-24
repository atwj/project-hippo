/**
 * Created by suece_000 on 2017-09-24.
 */
var firebase = require("firebase");

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyDQxyTtJmCAm9hLghosJOlKXwO6Ns2vEEo",
    // authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://project-hippo-fbc8f.firebaseio.com/"
    // storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);