import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC_8GZ4btwcsL3JtIXdr53qLkN3Z7ALH3w",
    authDomain: "goalcoach-810e7.firebaseapp.com",
    databaseURL: "https://goalcoach-810e7.firebaseio.com",
    projectId: "goalcoach-810e7",
    storageBucket: "goalcoach-810e7.appspot.com",
    messagingSenderId: "501056102997"
};

export const firebaseApp = firebase.initializeApp(config);
