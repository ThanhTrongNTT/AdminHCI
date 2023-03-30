import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    // ? Get admin role
    const admin = sessionStorage.getItem('admin');
    return admin === 'true' ? true : false;
};

const PrivateRoute = (children: any) => {
    const isAuth = true;
    return isAuth ? <Outlet /> : <Navigate to={'/login'} />;
};

export default PrivateRoute;
