import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { config } from '../interfaces/interfaces'

const firebaseConfig: config = {
  apiKey: "AIzaSyA968KyLiTn82CjPtrzKajH5EEsVbyd3MQ",
  authDomain: "todolist-d33ca.firebaseapp.com",
  projectId: "todolist-d33ca",
  storageBucket: "todolist-d33ca.appspot.com",
  messagingSenderId: "390635057205",
  appId: "1:390635057205:web:9e68207c922517afce417c"
}

// init firebase
initializeApp(firebaseConfig)

// init services
var db = getFirestore()

// init auth
const auth = getAuth()

export { db, auth }