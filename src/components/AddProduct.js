import React, { useState } from 'react';
import './Navbar.css';

const AddProduct = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      price,
      image: image || '',
    };
    onAdd(newProduct);
    setName('');
    setPrice('');
    setImage(null);
  };

  return (
    <div className="add-product">
      <h2 className="add-product-title">Add Product</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <label className="add-product-label" htmlFor="name">Name:</label>
        <input className="add-product-input" type="text" id="name" value={name} onChange={handleNameChange} required />
        <label className="add-product-label" htmlFor="price">Price:</label>
        <input className="add-product-input" type="number" id="price" value={price} onChange={handlePriceChange} required />
        <label className="add-product-label" htmlFor="image">Image:</label>
        <input className="add-product-input" type="file" id="image" onChange={handleImageChange} accept="image/*" />
        {image && <img src={image} alt="Product" className="add-product-preview-image" />}
        <button className="add-product-button" type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
