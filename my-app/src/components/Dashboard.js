import React, { useState, useEffect, useCallback } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');
  const [shipmentMessages, setShipmentMessages] = useState([]);

  const token = localStorage.getItem('token');

  const fetchUserProducts = useCallback(async () => {
    const response = await fetch('http://localhost:5000/user-products', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    setProducts(data);
  }, [token]);

  const fetchShipmentMessages = useCallback(async () => {
    const response = await fetch('http://localhost:5000/dashboard/shipments', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    setShipmentMessages(data.messages);
  }, [token]);

  useEffect(() => {
    fetchUserProducts();
    fetchShipmentMessages();
  }, [fetchUserProducts, fetchShipmentMessages]);

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', productName);
    formData.append('description', productDescription);
    formData.append('price', productPrice);
    formData.append('image', productImage);

    const response = await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });
    
    const data = await response.json();
    if (response.ok) {
      setMessage('Product added successfully!');
      setProducts([...products, data]);
      setProductName('');
      setProductDescription('');
      setProductPrice('');
      setProductImage(null);
    } else {
      setMessage('Failed to add product');
    }
  };

  const handleDeleteProduct = async (productId) => {
    const response = await fetch(`http://localhost:5000/products/${productId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.ok) {
      setMessage('Product deleted successfully!');
      setProducts(products.filter(product => product.id !== productId));
    } else {
      setMessage('Failed to delete product');
    }
  };

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <p>Welcome! You can now manage your products and view exclusive content.</p>

      <div className="add-product-form">
        <h3>Add a Product</h3>
        <form onSubmit={handleSubmitProduct}>
          <div>
            <label htmlFor="productName">Product Name:</label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter product name"
            />
          </div>
          <div>
            <label htmlFor="productDescription">Description:</label>
            <textarea
              id="productDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Enter product description"
            />
          </div>
          <div>
            <label htmlFor="productPrice">Price:</label>
            <input
              type="text"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder="Enter product price"
            />
          </div>
          <div>
            <label htmlFor="productImage">Upload Image:</label>
            <input
              type="file"
              id="productImage"
              onChange={handleImageChange}
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
        {message && <p>{message}</p>}
      </div>

      <div className="user-products">
        <h3>Your Products</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <img src={`http://localhost:5000/uploads/${product.image}`} alt={product.name} />
              <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="product-shipments">
        <h3>Product Shipments</h3>
        <ul>
          {shipmentMessages.length > 0 ? (
            shipmentMessages.map((message, index) => (
              <li key={index}>{message}</li>
            ))
          ) : (
            <p>No products are scheduled for pickup today.</p>
          )}
        </ul>
      </div>

      <p>If you have any questions or need assistance, our support team is just a click away. Enjoy exploring and managing your products!</p>
    </div>
  );
};

export default Dashboard;
