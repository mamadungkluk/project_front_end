import React, { useState } from 'react';

const EditProduct = ({ product, onUpdate, onCancelEdit }) => {
  const [editedProduct, setEditedProduct] = useState({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image || null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEditedProduct((prevState) => ({
      ...prevState,
      image: URL.createObjectURL(file),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the onUpdate function to save the updated product
    onUpdate(editedProduct);
  };

  const handleCancelEdit = () => {
    // Call the onCancelEdit function
    onCancelEdit();
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={editedProduct.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={editedProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
          />
          {editedProduct.image && (
            <img src={editedProduct.image} alt="Product" className="preview-image" />
          )}
        </div>
        <button type="submit">Save</button>
        <button onClick={handleCancelEdit}>Cancel</button>
      </form>
    </div>
  );
};

export default EditProduct;
