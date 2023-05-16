import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemCount } from './components/ItemCount/ItemCount';
// import{Pika} from './components/Pika/Pika';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { CartScreen } from './components/CartScreen/CartScreen';
import { 
  BrowserRouter as Router,
  Routes, 
  Navigate,
  Route,
} from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import { UiProvider } from './components/context/UIContext';
import { Checkout } from './components/Checkout/Checkout';

function App() {


  return (
    <UiProvider>
 <CartProvider>
  <div className='App'>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        {/*<Route path='/counter' element={<ItemCount/>} />
        <Route path='/pika' element={<Pika/>}/>*/}
        <Route path='*' element={<Navigate to='/' />}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
        <Route path='/detail/:itemId' element={<ItemDetailContainer/>} /> 
        <Route path='/cart' element={<CartScreen/>}/>
      </Routes>
    </Router>
  </div>
  </CartProvider>
  </UiProvider>
  );
}

export default App;
