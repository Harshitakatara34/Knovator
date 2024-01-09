// import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import { Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Plcaed from './Components/Plcaed';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path='/placed' element={<Plcaed />} />
    </Routes>
    </div>
  );
}

export default App;
