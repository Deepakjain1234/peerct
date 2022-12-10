// import  firebase from "firebase/app";
// import "firebase/auth";
// import { initializeApp } from "firebase/app";
// import {GoogleAuthProvider} from "firebase/auth"

// var FIREBASE_CONFIG = {
//     apiKey: "AIzaSyAoK05wdzaUxFc0vH4eFl4cArjOQ6aabmc",
//     authDomain: "peerct-e8529.firebaseapp.com",
//     projectId: "peerct-e8529",
//     storageBucket: "peerct-e8529.appspot.com",
//     messagingSenderId: "260614378557",
//     appId: "1:260614378557:web:d9c1181d7c00ed81da8654",
//     measurementId: "G-WNXGNY2CPW"
// };
// // console.log("Length:",firebase.app.length)

// // !firebase.apps.length ? initializeApp(FIREBASE_CONFIG) : firebase.app()
// const app=initializeApp(FIREBASE_CONFIG);

// export const auth = app.auth();
// const googleProvider = new GoogleAuthProvider()
// // export const signInWithGoogle = () => {
// //   auth.signInWithPopup(googleProvider).then((res) => {
// //     console.log(res.user)
// //   }).catch((error) => {
// //     console.log(error.message)
// //   })
// // }

// export const googleSignIn = () => {
    
//     return(
//        auth
//             .signInWithPopup(googleProvider)
//             .then((result) => {
//                 var credential = result.credential;

//                 // This gives you a Google Access Token. You can use it to access the Google API.
//                 var token = credential.accessToken;
//                 // The signed-in user info.
//                 var user = result.user;
//                 console.log(user)
//                 //dispatch({ type: "GET_USER", data: user })
//                 // user.getIdToken().then((idToken)=> {
//                 //     axios.post('https://www.looopx.com/api/v1/signin', {idToken}).then(res=> {
//                 //     console.log("Login response:",res.data)
//                 //     setCookie("bearer", res.data.bearer, 1);
//                 //     localStorage.setItem("userDetails", JSON.stringify(res.data.data));
                    
//                 // })
//                 // })
//                 //Login
//               //  var res = 
                
//                 return user
//                 // ...
//             }).catch((error) => {
//                 // Handle Errors here.
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 // The email of the user's account used.
//                 var email = error.email;
//                 // The firebase.auth.AuthCredential type that was used.
//                 var credential = error.credential;
//                 console.log('hari: google error', errorCode, errorMessage, email, credential)
//                 // ...
//             })
//     )
// }