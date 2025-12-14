import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";

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
    }

])