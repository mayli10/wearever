import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCgkLgC5jExHK9oP3C1SYGqM6f0o51mVLA",
    authDomain: "wearever-nuv.firebaseapp.com",
    databaseURL: 'https://wearever-nuv.firebaseio.com/',
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  };
var fire = firebase.initializeApp(config)

export default fire;

// import app from 'firebase/app';
// import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/database';

// const config = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: "wearever-nuv.firebaseapp.com",
//     databaseURL: 'https://wearever-nuv.firebaseio.com/',
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   };

// class Firebase {
//   constructor() {
//     app.initializeApp(config);
//     this.db = app.database();
//   }
  
//   product = () => this.db.ref(`Product/`);
//   products = () => this.db.ref('Product');
// }
  
// export default Firebase;