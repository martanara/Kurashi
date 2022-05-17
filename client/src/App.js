import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Item from './components/Item/Item';
import Category from './components/Cart/Cart';
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
          <Route exact path="/item/:name" element={<Item />} />
          <Route exact path="/category/:id" element={<Category />} />
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
