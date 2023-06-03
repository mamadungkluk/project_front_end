import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import EditProduct from './EditProduct';

const ProductItem = ({ product, editing, onDelete, onUpdate, onToggleEdit }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDelete = () => {
    onDelete(product.id);
  };
  const handleUpdate = (updatedProduct) => {
    onUpdate(updatedProduct);
  };
  const handleToggleEdit = () => {
    onToggleEdit(product.id);
  };
  return (
    <li>
      {editing ? (
        <EditProduct product={product} onUpdate={handleUpdate} onCancelEdit={handleToggleEdit} />
      ) : (
        <>
          <div>
            <strong>{product.name}</strong> - {product.price}
          </div>
          <div>
            <button onClick={() => setShowDetails(!showDetails)}>
              {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            <button onClick={handleToggleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
          {showDetails && <ProductDetails product={product} />}
        </>
      )}
    </li>
  );
};

export default ProductItem;
