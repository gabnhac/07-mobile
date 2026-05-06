import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCX5jj3_Lwzttv8wAiuGV__bXxSUCJhYIU",
  authDomain: "pratica02-gabriellucena.firebaseapp.com",
  projectId: "pratica02-gabriellucena",
  storageBucket: "pratica02-gabriellucena.firebasestorage.app",
  messagingSenderId: "527140649276",
  appId: "1:527140649276:web:34eab43a26fd6adaa0c639"
};
const firebaseConfi2g = {
  apiKey: `${process.env.FIREBASE_API_KEY}`,
  authDomain: `${process.env.FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.FIREBASE_APP_ID}`
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);