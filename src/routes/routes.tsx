import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Profile = lazy(() => import('../pages/Profile'));
const Home = lazy(() => import('../pages/Home'));
const Signup = lazy(() => import('../pages/auth/Signup'));
const Signin = lazy(() => import('../pages/auth/Signin'));
const ProtectedRoutes = lazy(() => import('../components/ProtectedRoutes'));
// const Signin = lazy(() => import('../comp'));

import MainLayout from '../components/MainLayout'



const Heading = () => <div> Loading</div>

const AUTH_ROUTES: RouteObject[] = [
    {
        path: 'auth',
        loader: Heading,
        children: [
            {
                index: true,
                element: <Signin />
            },
            {
                path: 'signup',
                element: <Signup />
            },
        ]
    }
];
const MAIN_ROUTES: RouteObject[] = [
    {
        path: 'to-do',
        element: <ProtectedRoutes />,
        children: [
            {
                children: [
                    {
                        index: true,
                        // element: <Home />
                        element: <MainLayout Page={Home} />
                    },
                    {
                        path: 'profile',
                        element: <Profile />
                    },
                ]
            }
        ]
    }
];

const AllRoutes = [...AUTH_ROUTES, ...MAIN_ROUTES];

export { AllRoutes }