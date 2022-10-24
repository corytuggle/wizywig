import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA5pvlEhSG_iWJ7vwgE7vH8qH9uHWSC9mo",
    authDomain: "wizywig-e3f40.firebaseapp.com",
    projectId: "wizywig-e3f40",
    storageBucket: "wizywig-e3f40.appspot.com",
    messagingSenderId: "63025582444",
    appId: "1:63025582444:web:f48fa22669311d22fca349"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app)
