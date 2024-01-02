// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2Aj6IMt6gVvwkKCwesXt0SGNjZwQKBSE",
  authDomain: "unityclassfinder.firebaseapp.com",
  projectId: "unityclassfinder",
  storageBucket: "unityclassfinder.appspot.com",
  messagingSenderId: "445589944202",
  appId: "1:445589944202:web:ccd46f3b178d9231ee7a73",
  measurementId: "G-GY8B3ZDT0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth();

export default app;