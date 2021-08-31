import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCVaxZYYpTFIw4Jwu-FEUGL6N5XWS9WK6k",
  authDomain: "crwn-db-53097.firebaseapp.com",
  projectId: "crwn-db-53097",
  storageBucket: "crwn-db-53097.appspot.com",
  messagingSenderId: "675076080728",
  appId: "1:675076080728:web:16ed1a3b588b9ee12fb62d",
  measurementId: "G-CWEDYGMY3F",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error createing user", err.message);
    }
  }
  return userRef;
};

export default firebase;
