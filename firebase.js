import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBi-wg0RgEEiXClUR4vmFNQ0CU2hx8k8xM",
    authDomain: "v3-2697d.firebaseapp.com",
    projectId: "v3-2697d",
    storageBucket: "v3-2697d.appspot.com",
    messagingSenderId: "875966446979",
    appId: "1:875966446979:web:55f9c4b2e1898ad4674ab6"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export default db;





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBi-wg0RgEEiXClUR4vmFNQ0CU2hx8k8xM",
//     authDomain: "v3-2697d.firebaseapp.com",
//     projectId: "v3-2697d",
//     storageBucket: "v3-2697d.appspot.com",
//     messagingSenderId: "875966446979",
//     appId: "1:875966446979:web:55f9c4b2e1898ad4674ab6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const db = getFirestore();

// export default db;