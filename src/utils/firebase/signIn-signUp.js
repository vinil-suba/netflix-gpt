import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './fireBase'

export const signIn_signUp = (email, password, formStatus, navigate) => {

    if(!formStatus) {
        //sign up
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log('sing up user', user);
            navigate('/browse')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('sing up user ', errorCode,' - ', errorMessage);
          });
        
    } else {
        // sign in
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('sing in user', user);
            navigate('/browse')
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('sing in user ', errorCode,' - ', errorMessage);
          });
        }
}