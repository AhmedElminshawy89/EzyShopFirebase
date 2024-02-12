import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCHFNgTorlTKyQdtiJ3IIcGlVMDFUMlhg4",
  authDomain: "maltimart-4b133.firebaseapp.com",
  projectId: "maltimart-4b133",
  storageBucket: "maltimart-4b133.appspot.com",
  messagingSenderId: "588604939554",
  appId: "1:588604939554:web:e489a8fdeda86c94bf197b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export default app