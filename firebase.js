// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtHkWIKJPKbVOFRtH8VdYrynU17nP2r9g",
  authDomain: "chatapp-c1660.firebaseapp.com",
  projectId: "chatapp-c1660",
  storageBucket: "chatapp-c1660.appspot.com",
  messagingSenderId: "76122033313",
  appId: "1:76122033313:web:4efee0e2650769c4dbb4e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
const db = getFirestore(app);
// const auth = getAuth(app);

export { db,auth };