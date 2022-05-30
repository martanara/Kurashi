import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { loadProductsRequest } from './redux/productsRedux';

import Category from './components/Category/Category';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Item from './components/Item/Item';
import Home from './components/Home/Home';
import MainLayout from './components/MainLayout/MainLayout';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import SubFooter from './components/SubFooter/SubFooter';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(loadProductsRequest()), [dispatch]);

  return (
    <BrowserRouter>
      <MainLayout>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category/:name/item/:id" element={<Item />} />
          <Route exact path="/category/:name" element={<Category />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
        <SubFooter />
        <Footer/>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
