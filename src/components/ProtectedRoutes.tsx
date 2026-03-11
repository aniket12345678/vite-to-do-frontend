import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    // let isLoggedIn = false;
    // if (isLoggedIn) {
    //     return <Outlet />;
    // }
    // return <Navigate to={'/auth'} />

    return <Outlet />;
}

export default ProtectedRoutes;