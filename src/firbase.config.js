// import {getApp, getApps, initial} from 'firebase/app'
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC6X2_eFLnrPgYcNsT4s08jyCknwCD0trE",
    authDomain: "restaurantapp-2ff0e.firebaseapp.com",
    databaseURL: "https://restaurantapp-2ff0e-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-2ff0e",
    storageBucket: "restaurantapp-2ff0e.appspot.com",
    messagingSenderId: "543438494232",
    appId: "1:543438494232:web:16d99104b011e43569816d"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };