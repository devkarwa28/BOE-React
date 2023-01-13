import React from 'react';
import Home from './Home';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
