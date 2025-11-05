import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Control from './pages/Control';
import Likes from './pages/Likes';


const routes = 
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/products' element={<Control item={<Products />} />} />
    <Route path='/likes' element={<Control item={<Likes />} />} />
  </Routes>
</BrowserRouter>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(routes);

