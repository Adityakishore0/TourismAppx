import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const location = useLocation();
  const [orderDetails, setOrderDetails] = useState(null);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const { state } = location;
    
    // Retrieve order ID and details from state or session storage
    const storedOrderId = state?.orderId || sessionStorage.getItem('orderId');
    const storedOrderDetails = state?.orderDetails || JSON.parse(sessionStorage.getItem('selectedProduct')) || [];

    if (storedOrderId) {
      setOrderId(storedOrderId);
      setOrderDetails([storedOrderDetails]); // Wrap in array to match rendering logic
    }
  }, [location]);

  return (
    <div className="order-confirmation">
      <h1>Order Confirmed</h1>
      <p>Thank you for your purchase!</p>
      <p>Order ID: {orderId || 'N/A'}</p>
      {orderDetails && orderDetails.length > 0 ? (
        orderDetails.map((item, index) => (
          <div key={index} className="order-detail">
            <p>Product: {item.name || 'Unknown Product'}</p>
            <p>Price: {item.price || 'Unknown Price'}</p>
            <p>Quantity: {item.quantity || 'Unknown Quantity'}</p>
            <p>Description: {item.description || 'No description available.'}</p>
            <img src={item.image || '/images/default.jpg'} alt={item.name} className="product-image" />
          </div>
        ))
      ) : (
        <p>No order details available.</p>
      )}
      <p>Your product will be delivered in 2 days.</p>
    </div>
  );
};

export default OrderConfirmation;
