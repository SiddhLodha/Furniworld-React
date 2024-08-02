import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ShopCategories from './pages/ShopCategories';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Footer from './components/footer/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import GoToTopButton from './components/gototop/GoToTop';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Checkout from './components/checkout/Checkout';
import Confirmation from './components/confirmation/Confirmation';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<ShopCategories category="All" />} />
        <Route path='/Chair' element={<ShopCategories category="Chair" />} />
        <Route path='/Table' element={<ShopCategories category="Table" />} />
        <Route path='/Desk' element={<ShopCategories category="Desk" />} />
        <Route path='/Bed' element={<ShopCategories category="Bed" />} />
        <Route path='/DiningTable' element={<ShopCategories category="Dining Table" />} />
        <Route path='/Sofa' element={<ShopCategories category="Sofa" />} />        
        <Route path='/AboutUs' element={<AboutUs category="AboutUs" />} />
        <Route path='/ContactUs' element={<Contact />} />
        <Route path = '/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path = '/checkout' element={<Checkout />}/>
        <Route path='/confirmation' element={<Confirmation />} />
 


      </Routes>
      <GoToTopButton />
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
