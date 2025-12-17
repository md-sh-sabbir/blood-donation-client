import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Dashboard/Common/Profile";
import AddRequest from "../pages/Dashboard/Donor/AddRequest";
import AllDonationReq from "../pages/Dashboard/Donor/AllDonationReq";
import DonationDetails from "../pages/Dashboard/Donor/DonationDetails";
import MyDonationReq from "../pages/Dashboard/Donor/MyDonationReq";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";

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
        path: 'all-donation-requests',
        element: <AllDonationReq></AllDonationReq>
    },
    {
        path: 'donation-request/:id',
        element: <DonationDetails></DonationDetails>

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
            },
            {
                path: 'add-request',
                element: <AddRequest></AddRequest>
            },
            {
                path: 'all-users',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'my-donation-requests',
                element: <MyDonationReq></MyDonationReq>
            }
        ]
    }

])