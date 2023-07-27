import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyD2POa-3DadPvAa9q9ddWS8On4cRjiYmM0',
  authDomain: 'movie-app-d2053.firebaseapp.com',
  projectId: 'movie-app-d2053',
  storageBucket: 'movie-app-d2053.appspot.com',
  messagingSenderId: '37318145216',
  appId: '1:37318145216:web:17f951f0e229d44b96a925',
  measurementId: 'G-3J1K91FMYL',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
