import * as firebase from 'firebase';
import firestore from 'firebase/firestore';


const config = {
  apiKey: "AIzaSyBoUjdGeP5LMbEcs17SHqda7wGOcFi-mwA",
  authDomain: "spm-healthcare.firebaseapp.com",
  databaseURL: "spm-healthcare.firebaseio.com",
  projectId: "spm-healthcare",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_ID"
};
firebase.initializeApp(config);

export default firebase;
