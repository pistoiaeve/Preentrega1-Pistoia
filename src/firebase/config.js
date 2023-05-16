import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTWttKWK5OVx5CT3O6viyeRdX9MxAd4EI",
  authDomain: "react-app-27b50.firebaseapp.com",
  projectId: "react-app-27b50",
  storageBucket: "react-app-27b50.appspot.com",
  messagingSenderId: "426884239179",
  appId: "1:426884239179:web:b7d4ec5c350aa4bfb862ce"
};

//Inicializo la app
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore =()=>{
    return firebase.firestore(app)
}