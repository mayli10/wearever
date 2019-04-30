import firebase from 'firebase'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "wearever-nuv.firebaseapp.com",
    databaseURL: 'https://wearever-nuv.firebaseio.com/',
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  };
var fire = firebase.initializeApp(config)

export default fire;