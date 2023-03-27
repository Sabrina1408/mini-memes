import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDUMsscg5hDSDBOtukbUEBXwqbbzTv_ZCM",
  authDomain: "miniblogs-5c8f9.firebaseapp.com",
  projectId: "miniblogs-5c8f9",
  storageBucket: "miniblogs-5c8f9.appspot.com",
  messagingSenderId: "185201748615",
  appId: "1:185201748615:web:87153256cadba92206a622",
  measurementId: "G-2DMMB8487L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Banco de dados

export {db};