/* eslint-disable */
/**
 * Firebase Database
 */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAytuDSrHDRMhhojSAmr9dNjRO73XQx_Y8",
    authDomain: "firstbot-505d6.firebaseapp.com",
    databaseURL: "https://firstbot-505d6.firebaseio.com",
    projectId: "firstbot-505d6",
    storageBucket: "firstbot-505d6.appspot.com",
    messagingSenderId: "425016206248",
    appId: "1:425016206248:web:856414ea781851a5"
};

firebase.initializeApp(config);