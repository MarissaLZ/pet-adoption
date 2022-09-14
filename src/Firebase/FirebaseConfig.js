import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// -- Create the data base with test mode so everyone can modify the data,
// to change this, we just need to change the rules --
// attached link with info here https://stackoverflow.com/questions/62615171/how-do-i-turn-my-firebase-firestore-project-from-test-mode-into-production-mode

//Current Rules:
// allow read, write: if request.time < timestamp.date(2022, 9, 5)

//Using relational data bases for linking the liked dogs with the user

//Setting up web app's configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

//initialize firebase with try catch method
try {
  firebase.initializeApp(firebaseConfig)
  // db.firestore().settings({
  //   experimentalForceLongPolling: true, // this line
  //   useFetchStreams: false, // and this line
  // })
  firebase.firestore()
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack)
  }
}

export default firebase
