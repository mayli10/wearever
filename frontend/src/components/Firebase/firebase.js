import app from 'firebase/app';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: 'https://wearever-nuv.firebaseio.com/',
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  };



  class Firebase {
    constructor() {
      app.initializeApp(config);
      this.db = app.database();
      // this.auth = app.auth();
    }
    
    product = () => this.db.ref(`Product/`);
    products = () => this.db.ref('Product');
  }
  
export default Firebase;