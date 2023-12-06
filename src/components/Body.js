import { RouterProvider } from "react-router-dom";
import appRouter from "../utils/route/Router";
import { useDispatch } from "react-redux";
import { onStateChange } from '../utils/firebase/onStateChange';
import { addUser, removeUser } from "../utils/store/slices/userSlice";
import { useEffect } from "react";

const Body = () => {

    const dispatchHook = useDispatch();

    useEffect(() => {
        const stateChangeInformation = onStateChange();
        stateChangeInformation == null ? 
        dispatchHook(addUser(stateChangeInformation)) :
        dispatchHook(removeUser())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return ( 
    <div> 
        <RouterProvider router={appRouter}/>
    </div>
     )
 }
 
 export default Body;