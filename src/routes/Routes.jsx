import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import Main from "../layout/Main";
import LoginPage from "../pages/LoginPage/LoginPage";



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
            }
        ]
    }
])



