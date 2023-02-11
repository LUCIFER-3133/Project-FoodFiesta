import { getApp, getApps, initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCygv_FGbEUV95MWQKX3nxXYEf3_JReGuM",
    authDomain: "foodfiesta-98974.firebaseapp.com",
    databaseURL: "https://foodfiesta-98974-default-rtdb.firebaseio.com",
    projectId: "foodfiesta-98974",
    storageBucket: "foodfiesta-98974.appspot.com",
    messagingSenderId: "134542706096",
    appId: "1:134542706096:web:6cefcd49198e8908d80275",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage};