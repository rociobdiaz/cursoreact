import firebase from 'firebase/app';
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR-q3VR7o5j2zmwF8J1lCSMcw_1idXKac",
  authDomain: "libreriaecommerce.firebaseapp.com",
  projectId: "libreriaecommerce",
  storageBucket: "libreriaecommerce.appspot.com",
  messagingSenderId: "200800661025",
  appId: "1:200800661025:web:4212e309e1da552bf1fd60"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app)
}