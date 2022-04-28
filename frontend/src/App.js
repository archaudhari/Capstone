import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import Header from './Layout/Header/Header';
import Shop from './routes/Shop/Shop';
import Footer from './Layout/Footer/Footer';
import Home from './routes/Home/Home';
import Product from './routes/Product/Product';
import Cart from './routes/Cart/Cart';
import Profile from './routes/Profile/Profile';
import ForgotPassword from './componenets/ForgotPassword/ForgotPassword';
import ProductDetails from './componenets/Product/ProductDetails';
import ErrorPage from './routes/ErrorPage/ErrorPage';
import { useEffect } from 'react';
import { loadUser } from './actions/userAction';
import store from './store';
import Sellerboard from './seller/SellerDashboard/Sellerboard';
import CreateShop from './seller/SellerDashboard/CreateShop';
import NewProduct from './seller/SellerDashboard/NewProduct.js';
import Adminboard from './admin/Dashboard/Adminboard';
import AdminShops from './admin/Shops/AdminShop';
import AdminProducts from './admin/Products/AdminProduct';
import AdminUsers from './admin/Users/AdminUser';

function App() {

  
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            
            <Route path="/shops" element={<Shop /> }/>


            <Route path="/products" element={<Product /> }/>
            

            <Route path="/cart" element={<Cart /> }/>

            <Route path="/product/:id" element={<ProductDetails /> }/>

            <Route path="/account" element={<Profile /> }/>
            

            <Route path="/admin/dashboard" element={<Adminboard /> }/> 
            
            <Route path='/admin/shops' element={<AdminShops /> } />

            <Route path="/admin/products" element={<AdminProducts /> }/>

            <Route path="/admin/users" element={<AdminUsers /> }/>
            
            <Route path="/seller/dashboard" element={<Sellerboard /> }/>

            <Route path="/forgotpassword" element={<ForgotPassword /> }/>

            <Route path="/seller/dashboard/createShop" element={<CreateShop /> }/>

            <Route path="/seller/dashboard/createProduct" element={<NewProduct /> }/>

            
            <Route path="*" element={<ErrorPage /> }/>

          </Routes>
          <Footer />
          </BrowserRouter>
    </div>
  );
}

export default App;
