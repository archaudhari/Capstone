import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './routes/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
  
        <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            
          </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
