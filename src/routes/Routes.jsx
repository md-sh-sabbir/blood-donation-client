import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Dashboard/Common/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        // children: [
        //    {
        //     path: 'register',
        //     Component: Register
        //    }

        // ]
    },
    {
        path: 'register',
        Component: Register
    },
    {
        path: 'login',
        Component: Login
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
               path: 'profile',
               element: <Profile></Profile>
            }
        ]
    }

])