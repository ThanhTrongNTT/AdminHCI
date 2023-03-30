import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRoute/PrivateRoute';

function DeclareRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to={'/admin'} />} />
                <Route path='/login' />
                <Route path='/admin' element={<PrivateRoute />}>
                    <Route path='' />
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
            </Routes>
        </>
    );
}

export default DeclareRouter;
