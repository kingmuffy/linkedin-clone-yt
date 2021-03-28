import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDXV63o4vAwODYJOTzM_Yiv9uz2gIPaqM4",
    authDomain: "linkind-clone-5e609.firebaseapp.com",
    projectId: "linkind-clone-5e609",
    storageBucket: "linkind-clone-5e609.appspot.com",
    messagingSenderId: "299244360273",
    appId: "1:299244360273:web:4eae3b86136165bdbf9e70"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth} ;