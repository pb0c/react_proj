import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import CartProvider from './context/CartProvider';

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
