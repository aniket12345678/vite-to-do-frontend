import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    let isLoggedIn = false;
    if (isLoggedIn) {
        return <Outlet />;
    }
    return <Navigate to={'/auth'} />
}

export default ProtectedRoutes;