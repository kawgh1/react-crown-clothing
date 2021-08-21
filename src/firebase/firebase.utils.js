import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
        apiKey: "AIzaSyCRJyTtQWLJtliwks8xnRpGjCZ5K3AivRU",
        authDomain: "crown-db-62654.firebaseapp.com",
        projectId: "crown-db-62654",
        storageBucket: "crown-db-62654.appspot.com",
        messagingSenderId: "981561321482",
        appId: "1:981561321482:web:db7a7b6f7a9de1ad6d17f3",
        measurementId: "G-WM192G384F"

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;