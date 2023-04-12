import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutDefault from '~/layout/LayoutDefault';
import Home from '~/screens/home/Home';
import Login from '~/screens/login/Login';
import PrivateRoute from './privateRoute/PrivateRoute';
import ListUser from '~/screens/list/ListUser';
import NewUser from '~/screens/new/NewUser';
import { DarkThemeToggle, useTheme, useThemeMode } from 'flowbite-react';

function DeclareRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to={'/admin'} />} />
                <Route path='/login' element={<Login />} />
                // TODO: Private route to permission user who is admin
                <Route path='/admin' element={<PrivateRoute />}>
                    <Route element={<LayoutDefault />}>
                        <Route path='' element={<Home />} />
                        <Route path='users' element={<ListUser />} />
                        <Route path='user'>
                            <Route path=':userId' />
                            <Route path='new' element={<NewUser />} />
                        </Route>
                        <Route path='products' />
                        <Route path='product'>
                            <Route path=':productId' />
                            <Route path='new' />
                        </Route>
                        <Route path='coupons' />
                        <Route path='coupon'>
                            <Route path=':couponId' />
                            <Route path='new' />
                        </Route>
                        <Route path='orders' />
                        <Route path='order'>
                            <Route path=':orderId' />
                            <Route path='new' />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default DeclareRouter;
