// Designer, Developer, and Author - Janne Kavander
// Student number 1903048

import firebase from 'firebase/app'
import 'firebase/auth'

// These are configurations for my mobile application
// API-key etc. are supposed to be secret, so I have hid repository from everyone.
// Only teacher and me can access it to prevent unauthorized use
// Also initializes the web app to use these configs
const app = firebase.initializeApp({
  apiKey: 'AIzaSyA_B8sJCIUjsZCfYStBAIY7tgZRgiEG6L8',
  authDomain: 'auth-mobile-app.firebaseapp.com',
  projectId: 'auth-mobile-app',
  storageBucket: 'auth-mobile-app.appspot.com',
  messagingSenderId: '72479650991',
  appId: '1:72479650991:web:f1af251276a299ccbd905a',
})

// Setup firebase
export const auth = app.auth()
export default app
