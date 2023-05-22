import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutDefault from '~/layout/LayoutDefault';
import Home from '~/screens/home/Home';
import ListOrder from '~/screens/list/ListOrder';
import ListProduct from '~/screens/list/ListProduct';
import ListProductCategory from '~/screens/list/ListProductCategory';
import ListProductCollection from '~/screens/list/ListProductCollection';
import ListProductColor from '~/screens/list/ListProductColor';
import ListProductSale from '~/screens/list/ListProductSale';
import ListProductSize from '~/screens/list/ListProductSize';
import ListProductStyle from '~/screens/list/ListProductStyle';
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
                        <Route path='user' element={<ListUser />} />
                        <Route path='product' element={<ListProduct />} />
                        <Route path='product-color' element={<ListProductColor />} />
                        <Route path='product-size' element={<ListProductSize />} />
                        <Route path='product-collection' element={<ListProductCollection />} />
                        <Route path='product-category' element={<ListProductCategory />} />
                        <Route path='product-style' element={<ListProductStyle />} />
                        <Route path='order' element={<ListOrder />} />
                        <Route path='sale' element={<ListProductSale />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default DeclareRouter;
