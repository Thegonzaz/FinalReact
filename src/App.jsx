import './App.css';
import React from 'react';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext'


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter >
    </>
  );
}

export default App;
