import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDjASlxdqsqBXdOd0o5GRdxZ4Xo4gO77Ks',
  authDomain: 'chat-web-app-db.firebaseapp.com',
  projectId: 'chat-web-app-db',
  storageBucket: 'chat-web-app-db.appspot.com',
  messagingSenderId: '926077088270',
  appId: '1:926077088270:web:a92727904c16fc96f6025f',
};

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export const storage = getStorage(firebaseApp);

export const db = getFirestore(firebaseApp);
