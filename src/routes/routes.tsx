import { RouteObject } from 'react-router-dom';
import Signin from '../pages/auth/Signin';
import Signup from '../pages/auth/Signup';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import ProtectedRoutes from '../components/ProtectedRoutes';
import Layout from '../components/Layout';

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
        path: '/to-do',
        element: <ProtectedRoutes />,
        children: [
            {
                children: [
                    {
                        index: true,
                        // element: <Home />
                        element: <Layout />
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