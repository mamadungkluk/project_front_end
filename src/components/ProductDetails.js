import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductDetails;
