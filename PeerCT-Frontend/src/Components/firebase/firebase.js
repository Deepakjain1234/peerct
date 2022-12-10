


import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import axios from 'axios';
import { Link } from 'react-router-dom'




const provider = new GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoK05wdzaUxFc0vH4eFl4cArjOQ6aabmc",
  authDomain: "peerct-e8529.firebaseapp.com",
  projectId: "peerct-e8529",
  storageBucket: "peerct-e8529.appspot.com",
  messagingSenderId: "260614378557",
  appId: "1:260614378557:web:d9c1181d7c00ed81da8654",
  measurementId: "G-WNXGNY2CPW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let responsedata


export const loginwithgoogle=()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // console.log(credential);
    
    // The signed-in user info.
    const user = result.user;
    console.log(user);

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/loginbygoogle`, {
        email: user.email,

    }).then(response => {
        responsedata = response.data.token;
        checkuser()
            .catch(function (error) {
                console.log(error);
            });
    });
    <Link to="/" />

    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })
}

const checkuser = () => {

    if (responsedata.length > 100) {
        alert("login sucessful")

        localStorage.setItem('token', responsedata);
        window.location.reload();
    }
    else {
        alert("Invalid ")
        alert(responsedata.length)
    }
}

export const registerwithgoogle=()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // console.log(credential);
    
    // The signed-in user info.
    const user = result.user;
    console.log(user);

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/registerbygoogle`, {
        email: user.email,
        name:user.displayName

    }).then(response => {
        responsedata = response.data})

            .catch(function (error) {
                console.log(error);
            });
    ;
    <Link to="/" />

    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })
}