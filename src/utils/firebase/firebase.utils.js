import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCPSA-WeYfALEmgAc5xE1R-qeGsHsCYqfg",
  authDomain: "crown-clothing-1fbe1.firebaseapp.com",
  projectId: "crown-clothing-1fbe1",
  storageBucket: "crown-clothing-1fbe1.appspot.com",
  messagingSenderId: "951443061612",
  appId: "1:951443061612:web:2aab8c726b7bd7d3f55149"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);