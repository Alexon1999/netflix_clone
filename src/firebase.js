import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB2wXSAL0IFFin5Nr-NSubxCh_aa8kYXus',
  authDomain: 'netflix-clone-f5e4d.firebaseapp.com',
  databaseURL: 'https://netflix-clone-f5e4d.firebaseio.com',
  projectId: 'netflix-clone-f5e4d',
  storageBucket: 'netflix-clone-f5e4d.appspot.com',
  messagingSenderId: '9416211855',
  appId: '1:9416211855:web:2d8ae4a012e99d252f5ffa',
  measurementId: 'G-CPKFVBHXKN',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
