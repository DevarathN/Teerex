import React from "react";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import "./Cart.css";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
const Cart = ({ cart, setCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const updateCart = (cart) => {
    let newprice = cart.reduce(
      (prevVal, curr) => prevVal + curr.price * curr.cartquantity,
      0
    );
    setTotalPrice(newprice);
  };

  useEffect(() => {
    updateCart(cart);
  }, [cart]);

  const removeFromCart = (item) => {
    console.log(cart);
    if (cart.length === 1) {
      cart = [];
    }
    setCart((prev) => prev.filter((prod) => prod.id !== item.id));
  };
  const handleQuantity = (id, value) => {
    let tempCart = cart.map((item) =>
      item.id === id ? { ...item, cartquantity: parseFloat(value) } : item
    );
    setCart(tempCart);
    // calculate(tempCart);
  };
  return totalPrice !== 0 ? (
    <div className="cart_container">
      <h1>Shopping Cart</h1>
      <div className="cart_block">
        {cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            removeFromCart={removeFromCart}
            handleQuantity={handleQuantity}
          />
        ))}
      </div>
      <h2 style={{ display: "inline", marginRight: "2rem" }}>Cart Total </h2>
      <h2 style={{ display: "inline" }}>₹{totalPrice}</h2>
    </div>
  ) : (
    <>
      <h2>Cart is Empty</h2>
      <SentimentVeryDissatisfiedIcon
        className="sad-cart-icon"
        style={{ marginBottom: "2rem", fontSize: "3rem" }}
      />
      <br />
      <ProductionQuantityLimitsIcon
        className="empty-cart-icon"
        style={{ fontSize: "15rem" }}
      />
    </>
  );
};

export default Cart;
