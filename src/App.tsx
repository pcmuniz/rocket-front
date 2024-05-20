import HomePage from './pages/Home'
import ProductPage from './pages/Product'
import CartPage from './pages/Cart'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;