import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Item from './components/Item/Item';
import Category from './components/Category/Category';
import Cart from './components/Cart/Cart';
import SubFooter from './components/SubFooter/SubFooter';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category/:name/item/:id" element={<Item />} />
          <Route exact path="/category/:name" element={<Category />} />
          <Route exact path="/cart" element={<Cart />} />
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
