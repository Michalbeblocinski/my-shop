import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB3q6lwgAkllz6Qks2aSxc8lT0D8k34Qgo",
    authDomain: "my-shop-db-38761.firebaseapp.com",
    projectId: "my-shop-db-38761",
    storageBucket: "my-shop-db-38761.appspot.com",
    messagingSenderId: "1063203826950",
    appId: "1:1063203826950:web:4a4dbbc1f38f8ee7d94287",
    measurementId: "G-1L59TJEV7T"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);