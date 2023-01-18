import React from 'react';
import Home from './Home';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import About from './About';
import Explore from './Explore';
import ContactUs from './ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Explore/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
