import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCnYLjOWq2DtfoveLvboFqLKoFarF96Q6M',
  authDomain: 'cv-builder-6e03c.firebaseapp.com',
  projectId: 'cv-builder-6e03c',
  storageBucket: 'cv-builder-6e03c.appspot.com',
  messagingSenderId: '719376600605',
  appId: '1:719376600605:web:ae4411268ae470248f00f4'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Initialize Firestore (or another Firebase service)
const db = getFirestore(firebaseApp)
const candidatesCollection = collection(db, 'candidates')

export { db, candidatesCollection }
