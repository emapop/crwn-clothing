import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDdRoTjZhnSzSnoFPQwVTqSBR1yYeWD2cU",
  authDomain: "crown-db-9053b.firebaseapp.com",
  databaseURL: "https://crown-db-9053b.firebaseio.com",
  projectId: "crown-db-9053b",
  storageBucket: "",
  messagingSenderId: "135536884426",
  appId: "1:135536884426:web:b90f931589fdb620"
};

firebase.initializeApp(config);

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
      ...additionalData
    });

  } catch (error) {
  console.log('Error creating user', error.message);
  }
}

return userRef;
} ;

// configuring the firebase utility that we get

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//this always trigger the google pop-up wenever we use this google auth provider
//for authentication and sign-in
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => (auth.signInWithPopup(provider));

export default firebase;







