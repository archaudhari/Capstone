import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import Header from './componenets/Header/Header';
import Shop from './routes/Shop/Shop';
import Footer from './componenets/Footer/Footer';
import Home from './routes/Home/Home';
import Product from './routes/Product/Product';
import Cart from './routes/Cart/Cart';
import Login from './components/Login/Login.js'
import Register from './components/Register/Register.js'
import ForgotPassword from './components/ForgotPassword/ForgotPassword.js'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
  
        <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            
            <Route path="/shop" element={<Shop /> }/>

            <Route path="/product" element={<Product /> }/>
            
            <Route path="/cart" element={<Cart /> }/>

            <Route path="/password/forgot" element={<ForgotPassword/>}/>

            <Route path='/login' element={<Login/>}/>

            <Route path='/register' element={<Register/>}/>
          </Routes>
          <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
