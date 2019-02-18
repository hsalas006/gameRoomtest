import firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyA0kHfgbRI6PcZgkiCU-HC1fbHrqPfguec",
    authDomain: "gameroom-3127e.firebaseapp.com",
    databaseURL: "https://gameroom-3127e.firebaseio.com",
    projectId: "gameroom-3127e",
    storageBucket: "gameroom-3127e.appspot.com",
    messagingSenderId: "577308809922"
  };
const fire = firebase.initializeApp(config);
export default fire;
