// ProductListingPage.js
import React, { useState } from 'react';
import './styles.css';

const ProductListingPage = ({ products, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div>
      <h2>Product Listing</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <p>${product.price}</p>
          <input type="number" min="1" value={quantity} onChange={handleQuantityChange} />
          <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
