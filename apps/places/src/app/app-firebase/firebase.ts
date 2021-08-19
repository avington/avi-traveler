import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '@avi-traveler/config';

const Firebase = firebase.initializeApp({ ...firebaseConfig });

// Add or Remove authentication methods here.
export const Providers = {
  google: new firebase.auth.GoogleAuthProvider(),
  facebook: new firebase.auth.FacebookAuthProvider(),
};

export const auth = firebase.auth();
export default Firebase;
