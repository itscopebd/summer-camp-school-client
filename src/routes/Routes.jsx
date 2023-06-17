import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import Main from "../layout/Main";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ClassesPage from "../pages/ClassesPage/ClassesPage";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../pages/Dashboard/Instructors/AddClass";
import ManageClass from "../pages/Dashboard/Admin/ManageClass";
import MyClasses from "../pages/Dashboard/Instructors/MyClasses";
import Instructors from "../pages/Instructors/Instructors";
import MyCart from "../pages/Dashboard/MyCart";
import Payment from "../pages/Dashboard/Payment/Payment";
import ErrorPage from "../pages/ErrorPage";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
               element:<Instructors></Instructors>
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
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:"payment",
                element:<Payment></Payment>

            },
            {
                path: "manageclass",
                element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
            },
            
            {
                path: "addclass",
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: "myclasses",
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            // user 
            {
                path:"mycart",
                element:<MyCart></MyCart>
            },
            


        ]
    }
])



