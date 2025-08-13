import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// HiveIn onboarding Firestore (public web key is safe to use in client)
const firebaseConfig = {
  apiKey: "AIzaSyCg6Mq51rJZN41w76Nu5pAVYDRGHEUUcVo",
  authDomain: "hivein-onboarding-pairing.firebaseapp.com",
  projectId: "hivein-onboarding-pairing",
  storageBucket: "hivein-onboarding-pairing.firebasestorage.app",
  messagingSenderId: "376380115313",
  appId: "1:376380115313:web:0c19883cdfe1aed8bd4ed0",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export { app };
