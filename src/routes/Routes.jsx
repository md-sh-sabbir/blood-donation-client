import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Register from "../pages/Register";

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
    }
])