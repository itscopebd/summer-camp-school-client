import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import Main from "../layout/Main";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import Instructors from "../pages/Instructors/Instructors";
import ClassesPage from "../pages/ClassesPage/ClassesPage";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart";
import PrivateRoute from "./PrivateRoute";
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

                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: "/singup",
                element: <RegisterPage></RegisterPage>
            }, {
                path: "/instructors",
                element: <Instructors></Instructors>
            },
            {
                path: "/classes",
                element: <ClassesPage></ClassesPage>
            }
        ]
    },
    {
        path:"dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:"mycart",
                element:<MyCart></MyCart>
            }
        ]
    }
])



