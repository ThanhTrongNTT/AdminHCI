import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutDefault from '~/layout/LayoutDefault';
import Home from '~/screens/home/Home';
import Login from '~/screens/login/Login';
import PrivateRoute from './privateRoute/PrivateRoute';

function DeclareRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to={'/admin'} />} />
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={<PrivateRoute />}>
                    <Route element={<LayoutDefault />}>
                        <Route path='' element={<Home />} />
                        <Route path='users' />
                        <Route path='user'>
                            <Route path=':userId' />
                            <Route path='new' />
                        </Route>
                        <Route path='products' />
                        <Route path='product'>
                            <Route path=':productId' />
                            <Route path='new' />
                        </Route>
                        <Route path='sales' />
                        <Route path='sale'>
                            <Route path=':saleId' />
                            <Route path='new' />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default DeclareRouter;
