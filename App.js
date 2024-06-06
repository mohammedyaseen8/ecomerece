// App.js
import React, { useState } from 'react';
import ProductListingPage from './ProductListingPage';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import './styles.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('productListing');

  // Sample products
  const products = [
    { id: 1, name: 'Airpods', image: 'path/to/image1.jpg', price: 2000 },
    { id: 2, name: 'SAMSUNG Galaxy s6 edge', image: 'path/to/image2.jpg', price: 25000 },
    { id: 3, name: 'LG led TV', image: 'path/to/image3.jpg', price: 50000 },
  ];

  const addToCart = (product, quantity) => {
    const itemIndex = cart.findIndex((item) => item.product.id === product.id);
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };

  return (
    <div>
      <header>
        <button onClick={() => setPage('productListing')}>Product Listing</button>
        <button onClick={() => setPage('cart')}>Cart</button>
        <button onClick={() => setPage('checkout')}>Checkout</button>
      </header>
      {page === 'productListing' && <ProductListingPage products={products} addToCart={addToCart} />}
      {page === 'cart' && <CartPage cart={cart} />}
      {page === 'checkout' && <CheckoutPage cart={cart} />}
    </div>
  );
};

export default App;
