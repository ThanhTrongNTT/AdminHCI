import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutDefault from '~/layout/LayoutDefault';
import Home from '~/screens/home/Home';
import ListOrder from '~/screens/list/ListOrder';
import ListProduct from '~/screens/list/ListProduct';
import ListUser from '~/screens/list/ListUser';
import Login from '~/screens/login/Login';
import PrivateRoute from './privateRoute/PrivateRoute';

function DeclareRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to={'/admin'} />} />
                <Route path='/login' element={<Login />} />
                {/* TODO: Private route to permission user who is admin */}
                <Route path='/admin' element={<PrivateRoute />}>
                    <Route element={<LayoutDefault />}>
                        <Route path='' element={<Home />} />
                        <Route path='users' element={<ListUser />} />
                        <Route path='products' element={<ListProduct />} />
                        <Route path='orders' element={<ListOrder />} />
                        <Route path='coupons' />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default DeclareRouter;
