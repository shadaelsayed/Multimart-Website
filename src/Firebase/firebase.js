import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBlA90iqMTd5XolTB-8-SKj_cRoiIMj704",
  authDomain: "shadap1-56e.firebaseapp.com",
  projectId: "shadap1-56e",
  storageBucket: "shadap1-56e.firebasestorage.app",
  messagingSenderId: "320942920154",
  appId: "1:320942920154:web:bbdca137c838137e7930e3",
  measurementId: "G-RDMTN4V2QC"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const authStore = getFirestore(app)