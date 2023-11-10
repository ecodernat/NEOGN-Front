import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const variables = import.meta.env;

const firebaseConfig = {
  apiKey: variables.VITE_FIREBASE_API_KEY,
  authDomain: variables.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: variables.VITE_FIREBASE_PROJECT_ID,
  storageBucket: variables.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: variables.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: variables.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
