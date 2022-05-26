import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loadUser } from './actions/userAction';
import store from './store';

import Header from './Layout/Header/Header';
import Shop from './routes/Shop/Shop';
import Footer from './Layout/Footer/Footer';
import Home from './routes/Home/Home';
import Product from './routes/Product/Product';
import Cart from './routes/Cart/Cart';
import Profile from './routes/Profile/Profile';
import ForgotPassword from './componenets/ForgotPassword/ForgotPassword';
import ProductDetails from './componenets/Product/ProductDetails';
import Shipping from './routes/Cart/Shipping';
import ConfirmOrder from './routes/Cart/ConfirmOrder'
import ErrorPage from './routes/ErrorPage/ErrorPage';
import ShopDetails from './routes/ShopDetails/ShopDetails';


import Sellerboard from './seller/Dashboard/Sellerboard';
import ShopNew from './seller/Shops/New/ShopNew';
import ShopAll from './seller/Shops/All/ShopAll';

import Adminboard from './admin/Dashboard/Adminboard';
import AdminShops from './admin/Shops/AdminShop';
import AdminProducts from './admin/Products/AdminProduct';
import AdminUsers from './admin/Users/AdminUser';

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import Payment from "./routes/Cart/Payment";
// import axios from 'axios';


function App() {

  const { user } = useSelector(state => state.user)
  // const [stripeApiKey, setStripeApiKey] = useState("");
  // async function getStripeApiKey() {
  //   const { data } = await axios.get("http://localhost:4000/api/v1/stripeapikey");

  //   setStripeApiKey(data.stripeApiKey);
  // }
  
  useEffect(() => {
    store.dispatch(loadUser());

    // getStripeApiKey();
    
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            
            <Route path="/shops" element={<Shop /> }/>
            
            <Route path="/shop/:id" element={<ShopDetails /> }/>

            <Route path="/products" element={<Product /> }/>
          
            <Route path="/cart" element={<Cart user={user} /> }/>

            <Route path="/product/:id" element={<ProductDetails user={user} /> }/>

            <Route path="/forgotpassword" element={<ForgotPassword /> }/>
            
            <Route path="*" element={<ErrorPage /> }/>



            { user ? (
              <>
                {/* <Elements stripe={loadStripe(stripeApiKey)}>
                   <Route  path="/process/payment" element={<Payment/>} />
                </Elements> */}
                <Route  path="/process/payment" element={<Payment/>} />
              
                <Route path="/account" element={<Profile /> }/>

                <Route path="/shipping" element={<Shipping />} />

                <Route path="/order/confirm" element={<ConfirmOrder />} />

                <Route path="/shipping" element={<Shipping />} />

                <Route path="/profile" element={<Profile /> }/>
            
                <Route path="/seller/dashboard" element={<Sellerboard /> }/>
        
                <Route path="/seller/shop/new" element={<ShopNew /> }/>

                <Route path="seller/shops" element={<ShopAll />} />

        
                <Route path="/admin/dashboard" element={<Adminboard /> }/>
        
                <Route path='/admin/shops' element={<AdminShops /> } />

                <Route path="/admin/products" element={<AdminProducts /> }/>

                <Route path="/admin/users" element={<AdminUsers /> }/>
              </>
            ) : (
              <></>
            )}

            

          </Routes>
          <Footer />
          </BrowserRouter>
    </div>
  );
}

export default App;
