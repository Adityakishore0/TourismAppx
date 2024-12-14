import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Merchandise.css'; // Import the CSS file

const initialMerchandise = {
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

const Merchandise = () => {
  const [merchandise, setMerchandise] = useState(initialMerchandise);
  const [popularProducts, setPopularProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        const data = await response.json();

        // Set the popular products with the fetched data
        setPopularProducts(data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    fetchProducts();
  }, []);

  const handleBuyNow = (product) => {
    // Implement the Buy Now logic, e.g., navigate to the product page or cart
    console.log('Buy Now clicked for product:', product);
    navigate('/payment', { state: { product } }); // Example navigation
  };

  return (
    <div className="merchandise-container">
      <h1>Explore Our Merchandise</h1>
      <p>Discover a selection of authentic Indian products that capture the essence of our rich cultural heritage.</p>
      
      {Object.keys(merchandise).map(category => (
        <div key={category} className="category-section">
          <h2>{category.replace(/([A-Z])/g, ' $1').toUpperCase()}</h2>
          <div className="product-list">
            {merchandise[category].map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p><strong>Price:</strong> {product.price}</p>
                  <button onClick={() => handleBuyNow(product)} className="buy-now">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="category-section">
        <h2>Popular Products</h2>
        <div className="product-list">
          {popularProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={`http://localhost:5000/uploads/${product.image}`} alt={product.name} style={{ width: '300px', height: '268px' }} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p><strong>Price:</strong> {product.price}</p>
                <button onClick={() => handleBuyNow(product)} className="buy-now">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
