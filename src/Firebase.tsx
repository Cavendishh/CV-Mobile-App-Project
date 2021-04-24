import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: 'AIzaSyA_B8sJCIUjsZCfYStBAIY7tgZRgiEG6L8',
  authDomain: 'auth-mobile-app.firebaseapp.com',
  projectId: 'auth-mobile-app',
  storageBucket: 'auth-mobile-app.appspot.com',
  messagingSenderId: '72479650991',
  appId: '1:72479650991:web:f1af251276a299ccbd905a',
})

export const auth = app.auth()
export default app
