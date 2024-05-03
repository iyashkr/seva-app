import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
      apiKey: "AIzaSyC4Vwm47zbpaWYyFSxe3DhbNKyeye3aLuc",
  authDomain: "seva-app-e560a.firebaseapp.com",
  projectId: "seva-app-e560a",
  storageBucket: "seva-app-e560a.appspot.com",
  messagingSenderId: "552318495022",
  appId: "1:552318495022:web:948f6dacb7d4fa0e7872bf"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(AsyncStorage)
});;