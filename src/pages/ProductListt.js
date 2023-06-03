import React from 'react';

const ProductListt = ({ products, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <span>{product.name}</span>
              <button onClick={() => onDelete(product.id)}>Delete</button>
              <button onClick={() => onEdit(product.id)}>Edit</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductListt;
