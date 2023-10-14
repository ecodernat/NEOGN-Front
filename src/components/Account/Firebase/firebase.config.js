import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWoq5_B-vkUeT4bxmlxDoNB5j_Vo48te0",
  authDomain: "neogn-ce89c.firebaseapp.com",
  projectId: "neogn-ce89c",
  storageBucket: "neogn-ce89c.appspot.com",
  messagingSenderId: "928198315438",
  appId: "1:928198315438:web:a994081d5057e5237a0c3f",
  measurementId: "G-XXCLN8C8PQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);