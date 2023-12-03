// const { createBrowserRouter } = require("react-router-dom");
import  { createBrowserRouter }  from "react-router-dom";
import Login from "../components/Login";
import Browse from "../components/Browse";
// const { default: Body } = require("../components/Body");
// const { default: Browse } = require("../components/Browse");

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <Login/>
    },
    {
        path:'/browse',
        element: <Browse/>
    },
])

export default appRouter;