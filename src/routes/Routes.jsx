import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import Main from "../layout/Main";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import Instructors from "../pages/Instructors/Instructors";
// import TestPage from "../pages/RegisterPage/TestPage";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
             {

                path:'/login',
                element:<LoginPage></LoginPage>
            },
            {
                path:"/singup",
                element:<RegisterPage></RegisterPage>
            },{
                path:"/instructors",
                element:<Instructors></Instructors>
            }
        ]
    }
])



