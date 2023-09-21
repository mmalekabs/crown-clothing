import {initializeApp} from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD4tnT9SpbiWru1tpFuzja_DlTnmLA52j4",
    authDomain: "penguin-clothing-db.firebaseapp.com",
    projectId: "penguin-clothing-db",
    storageBucket: "penguin-clothing-db.appspot.com",
    messagingSenderId: "1070998173031",
    appId: "1:1070998173031:web:6a51c3c95941c007102bc2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
   prompt: "select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)