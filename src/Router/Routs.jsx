import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Dashboard from "../Components/Dashboard/Dashboard";
import DashHome from "../Components/Dashboard/DashHome";
import Users from "../Components/Dashboard/Users";
import UsersRequest from "../Components/Dashboard/UsersRequest";
import TransectionNo from "../Components/Dashboard/TransectionNo";

const Routs = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard/>,
        children:[
            {
                path:'/dashboard',
                element:<DashHome/>
            },
            {
                path: '/dashboard/users',
                element: <Users/>
            },
            {
                path: '/dashboard/usersRequest',
                element: <UsersRequest/>
            },
            {
                path: '/dashboard/transection',
                element: <TransectionNo/>
            },
        ]
    }
])

export default Routs;