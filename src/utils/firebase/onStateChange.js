import { onAuthStateChanged } from "firebase/auth";
import { auth } from './fireBase'

export const onStateChange = function() {

    onAuthStateChanged(auth, (user) => {
        console.log('onStateChangeCall') 
        if (user) {
        // User is signed In
        const { uid, email, displayName } = user.uid;
            return { 
                uid: uid, 
                email: email, 
                displayName: displayName
            }
        } else {
        // User is signed out
          return null;
        }
    });
};