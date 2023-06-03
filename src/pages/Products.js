import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import AddProduct from '../components/AddProduct';
import EditProduct from '../components/EditProduct';
import './MyForm'; // Ubah 'Product.css' sesuai dengan nama file CSS Anda

const Product = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const startEditing = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    setEditProduct(productToEdit);
    setIsEditing(true);
  };

  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setIsEditing(false);
    setEditProduct(null);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditProduct(null);
  };

  const addImage = (productId, imageUrl) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, image: imageUrl } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h1 className="product-page-title">Product Page</h1>
      {isEditing ? (
        <EditProduct product={editProduct} onUpdate={updateProduct} onCancelEdit={cancelEdit} />
      ) : (
        <>
          <ProductList products={products} onDelete={deleteProduct} onEdit={startEditing} />
          <AddProduct onAdd={addProduct} />
        </>
      )}
      {products.length > 0 ? (
        <div>
          <h2 className="product-list-title">Product List:</h2>
          <ul className="product-list">
            {products.map((product) => (
              <li key={product.id}>
                {product.image ? (
                  <img src={product.image} alt={product.name} className="product-image" />
                ) : (
                  <div className="no-image-placeholder">No Image</div>
                )}
                <span className="product-name">{product.name}</span>
                <span className="product-price">${product.price}</span>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
                <button onClick={() => startEditing(product.id)}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default Product;
