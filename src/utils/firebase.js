import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FOREBASE_STORAGE_BUCKET,
};

firebase.initializeApp(config);

const database = firebase.database();

export {
  database,
}

export default firebase;
