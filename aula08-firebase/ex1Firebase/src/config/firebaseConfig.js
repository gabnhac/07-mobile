import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDjysBb6bQGFXhOIcvVq_-iTCxDGXLcJLc",
  authDomain: "unipam-gabluce-app.firebaseapp.com",
  projectId: "unipam-gabluce-app",
  storageBucket: "unipam-gabluce-app.firebasestorage.app",
  messagingSenderId: "49688986235",
  appId: "1:49688986235:web:0fef6ed51ede0488f518de",
  measurementId: "G-5CTVKLTJX2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);