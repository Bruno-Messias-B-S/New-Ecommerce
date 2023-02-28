import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPSA-WeYfALEmgAc5xE1R-qeGsHsCYqfg",
  authDomain: "crown-clothing-1fbe1.firebaseapp.com",
  projectId: "crown-clothing-1fbe1",
  storageBucket: "crown-clothing-1fbe1.appspot.com",
  messagingSenderId: "951443061612",
  appId: "1:951443061612:web:2aab8c726b7bd7d3f55149"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async ( email, password )  => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword( auth, email, password );
}

export const signInAuthUserWithEmailAndPassword = async ( email, password )  => {
  if (!email || !password) return

  return await signInWithEmailAndPassword( auth, email, password );
}