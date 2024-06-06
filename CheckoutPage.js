// CheckoutPage.js
import React from 'react';
import './styles.css';

const CheckoutPage = ({ cart }) => {
  return (
    <div>
      <h2>Checkout</h2>
      <h3>Order Summary</h3>
      {cart.map((item) => (
        <div key={item.product.id}>
          <p>{item.product.name} - Quantity: {item.quantity}</p>
        </div>
      ))}
      <p>Total Price: ${cart.reduce((total, item) => total + item.product.price * item.quantity, 0)}</p>
      <button>Confirm Order</button>
    </div>
  );
};

export default CheckoutPage;
