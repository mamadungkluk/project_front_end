import React, { useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);

  const addProduct = (product) => {
    product.id = Date.now().toString();
    setProducts([...products, product]);
  };
  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };
  const updateProduct = (updatedProduct) => {
    const index = products.findIndex((product) => product.id === updatedProduct.id);
    if (index !== -1) {
      const updatedProducts = [...products];
      updatedProducts[index] = updatedProduct;
      setProducts(updatedProducts);
      setEditingProductId(null);
    }
  };
  const toggleEditProduct = (productId) => {
    setEditingProductId(productId);
  };
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            editing={editingProductId === product.id}
            onDelete={deleteProduct}
            onUpdate={updateProduct}
            onToggleEdit={toggleEditProduct}
          />
        ))}
      </ul>
      <addProduct onAdd={addProduct} />
    </div>
  );
};

export default ProductList;