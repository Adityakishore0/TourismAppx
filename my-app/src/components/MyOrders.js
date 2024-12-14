import React, { useState, useEffect } from 'react';
import './MyOrders.css';

const productDetails = {
  handicrafts: [
    {
      id: '1',
      name: 'Handcrafted Wooden Carvings',
      image: '/images/wooden-carvings.jpg',
      description: 'Beautifully carved wooden pieces crafted by local artisans.',
      price: '$120',
    },
    {
      id: '2',
      name: 'Bamboo Handicrafts',
      image: '/images/bamboo-handicrafts.jpg',
      description: 'Eco-friendly bamboo handicrafts from Northeast India, perfect for sustainable living.',
      price: '$35',
    },
    {
      id: '3',
      name: 'Madhubani Paintings',
      image: '/images/madhubani-paintings.jpg',
      description: 'Traditional Madhubani paintings from Bihar, showcasing vibrant colors and folk art.',
      price: '$200',
    },
    {
      id: '4',
      name: 'Brass Statues',
      image: '/images/brass-statues.jpg',
      description: 'Handcrafted brass statues from Tamil Nadu, perfect for adding a touch of spirituality to your home.',
      price: '$120',
    }
    // Add more handicrafts
  ],
  traditionalClothing: [
    {
      id: '5',
      name: 'Traditional Saree',
      image: '/images/saree.jpg',
      description: 'Elegant saree made from fine silk, perfect for special occasions.',
      price: '$150',
    },
    {
      id: '6',
      name: 'Lehenga Choli',
      image: '/images/lehenga-choli.jpg',
      description: 'A beautiful traditional outfit worn during festivals and weddings, consisting of a long skirt, blouse, and dupatta.',
      price: '$250',
    },
    {
      id: '7',
      name: 'Chikankari Kurta',
      image: '/images/chikankari-kurta.jpg',
      description: 'An elegant kurta featuring the famous Chikankari embroidery from Lucknow.',
      price: '$80',
    },
    {
      id: '8',
      name: 'Phulkari Dupatta',
      image: '/images/phulkari-dupatta.jpg',
      description: 'A vibrant dupatta from Punjab, decorated with intricate Phulkari embroidery.',
      price: '$50',
    }
    // Add more traditional clothing
  ],
  artisanalGoods: [
    {
      id: '9',
      name: 'Handmade Pottery',
      image: '/images/pottery.jpg',
      description: 'Unique pottery pieces crafted using traditional methods.',
      price: '$60',
    },
    {
      id: '10',
      name: 'Terracotta Jewelry',
      image: '/images/terracotta-jewelry.jpg',
      description: 'Beautiful handmade jewelry pieces crafted from terracotta clay, perfect for adding a touch of ethnic charm.',
      price: '$40',
    },
    {
      id: '11',
      name: 'Jute Bags',
      image: '/images/jute-bags.jpg',
      description: 'Eco-friendly and stylish jute bags, handwoven by artisans with unique patterns.',
      price: '$30',
    },
    {
      id: '12',
      name: 'Bastar Iron Craft',
      image: '/images/bastar-iron-craft.jpg',
      description: 'Unique iron sculptures from Chhattisgarh, known for their intricate designs and tribal motifs.',
      price: '$180',
    }
    // Add more artisanal goods
  ]
};

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    
    // Sort orders by date in descending order
    storedOrders.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Limit to the most recent 2 orders
    const recentOrders = storedOrders.slice(0, 2);
    
    setOrders(recentOrders);
  }, []);

  // Helper function to find product details by ID
  const getProductDetails = (productId) => {
    for (const category in productDetails) {
      const product = productDetails[category].find(p => p.id === productId);
      if (product) return product;
    }
    return null;
  };

  return (
    <div className="my-orders-container">
      <h1>My Orders</h1>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index} className="order-item">
            <p>Order Date: {new Date(order.date).toLocaleDateString()}</p>
            <p>Status: {order.status}</p>
            <div>
              {order.items && order.items.length > 0 ? (
                order.items.map((item, idx) => {
                  const productDetails = getProductDetails(item.productId);
                  return (
                    <div key={idx} className="order-detail">
                      <p>Product: {productDetails ? productDetails.name : 'Unknown Product'}</p>
                      <p>Price: {productDetails ? productDetails.price : 'Unknown Price'}</p>
                      <p>Quantity: {item.quantity}</p>
                      {productDetails && (
                        <div className="product-info">
                          <img src={productDetails.image} alt={productDetails.name} className="product-image" />
                          <p>Description: {productDetails.description}</p>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <p>No items found.</p>
              )}
            </div>
            <p>Delivery: Your product will be delivered in 2 days.</p>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default MyOrders;
