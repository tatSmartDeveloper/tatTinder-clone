import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDiWc5bKHpFWZ0Po2TaH_0AIYsyjHmZ50w',
  authDomain: 'tinder-clone-c93e2.firebaseapp.com',
  databaseURL: 'https://tinder-clone-c93e2.firebaseio.com',
  projectId: 'tinder-clone-c93e2',
  storageBucket: 'tinder-clone-c93e2.appspot.com',
  messagingSenderId: '835153837784',
  appId: '1:835153837784:web:80b1ede3d371f05c8ce1ad',
  measurementId: 'G-ZFNWRKL9GN',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
