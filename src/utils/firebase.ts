import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB_shFXZVOauk0qQSi4FYgWM7G707jBcmA',
  authDomain: 'd-profile-12f16.firebaseapp.com',
  projectId: 'd-profile-12f16',
  storageBucket: 'd-profile-12f16.appspot.com',
  messagingSenderId: '636563510506',
  appId: '1:636563510506:web:eb391732ff302dc4f4f393',
};
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export const Providers = {
  github: new GithubAuthProvider(),
  google: new GoogleAuthProvider(),
};

export { db, auth };
