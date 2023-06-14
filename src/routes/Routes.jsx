import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import Main from "../layout/Main";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ClassesPage from "../pages/ClassesPage/ClassesPage";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../pages/Dashboard/Instructors/AddClass";
import ManageClass from "../pages/Dashboard/Admin/ManageClass";
import MyClasses from "../pages/Dashboard/Instructors/MyClasses";
import Instructors from "../pages/Dashboard/Instructors/Instructors";




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
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            
            {
                path: "allusers",
                element: <AllUsers></AllUsers>
            },
            {
                path: "manageclass",
                element: <ManageClass></ManageClass>
            },
            
            {
                path: "addclass",
                element: <AddClass></AddClass>
            },
            {
                path: "myclasses",
                element: <MyClasses></MyClasses>
            }


        ]
    }
])



