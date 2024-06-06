// CartPage.js
import React from 'react';
import './styles.css';

const CartPage = ({ cart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item) => (
        <div key={item.product.id}>
          <h3>{item.product.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.product.price * item.quantity}</p>
        </div>
      ))}
      <p>Total Quantity: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
      <p>
        Total Price: ${cart.reduce((total, item) => total + item.product.price * item.quantity, 0)}
      </p>
    </div>
  );
};

export default CartPage;
