import React, { useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (product) => {
      setCartItems((prevItems) => [...prevItems, product]);
    };
  
    return (
      <div>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  export default Cart