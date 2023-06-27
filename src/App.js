import "./App.css";
import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Header from "./Header/Header";
import Cart from "./Cart/Cart";
function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            exact
            path="/"
            element={<LandingPage cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
