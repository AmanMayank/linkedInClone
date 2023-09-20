import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAi4acAEqG-5AsOPNE6s_tpOQTTgTb9HIE",
  authDomain: "linkedinclone-dd5a1.firebaseapp.com",
  projectId: "linkedinclone-dd5a1",
  storageBucket: "linkedinclone-dd5a1.appspot.com",
  messagingSenderId: "826701327080",
  appId: "1:826701327080:web:23061ad81972b90374375d",
  measurementId: "G-T9QDRGY2H0",
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export { firebaseApp };
