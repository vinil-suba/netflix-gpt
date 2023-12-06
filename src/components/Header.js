/* eslint-disable jsx-a11y/alt-text */
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase/fireBase'
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();

    const handleSignout = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/')
        }).catch((error) => {
        // An error happened.
        console.log('error while signout the app', error)
        });
    }
    return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 text flex justify-between">
        <div>
             <img className="w-44"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            />
        </div>
        <div className="flex p-2">
            <img className="w-12 h-12 " src="https://lh3.googleusercontent.com/ogw/ANLem4Ylthqy7_fmo-LtuYF5n7Bt_6Pklam74EtQ3sVp=s32-c-mo" alt="logo"></img>
        <button className="font-bold text-white" onClick={handleSignout}>(sign out 🔥)</button>
        </div>
    </div>
    )
}

export default Header;