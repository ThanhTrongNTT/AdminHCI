import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    // ? Get admin role
    const admin = sessionStorage.getItem('admin');
    return admin === 'true';
};

const PrivateRoute = (children: any) => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to={'/login'} />;
};

export default PrivateRoute;
