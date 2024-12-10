import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDLGT3iUSiaVW-JvHY_pgHLpjr9brMr7m4",
    authDomain: "smartbintracker-d98c4.firebaseapp.com",
    databaseURL: "https://smartbintracker-d98c4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smartbintracker-d98c4",
    storageBucket: "smartbintracker-d98c4.firebasestorage.app",
    messagingSenderId: "997711872128",
    appId: "1:997711872128:web:e5bc5386dafb06f307e665"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export {db,ref,onValue};
