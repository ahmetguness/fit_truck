import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { FirebaseConfig } from "../../models/firebase/FirebaseConfig";
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from "@env";

const firebaseConfig: FirebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

const app = initializeApp(firebaseConfig);

const db: Firestore = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
