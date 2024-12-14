const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Setup PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files from the uploads directory

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET; // Replace with your secret key

// User registration
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if user already exists
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, hashedPassword]);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// User login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Find user
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = result.rows[0];
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Middleware to authenticate user
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Get user details
app.get('/me', authenticate, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [req.user.id]);
    const user = result.rows[0];
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add new product
app.post('/products', [authenticate, upload.single('image')], async (req, res) => {
  const { name, description, price } = req.body;
  const image = req.file.filename;
  try {
    const result = await pool.query(
      'INSERT INTO products (user_id, name, description, price, image) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [req.user.id, name, description, price, image]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get products for the logged-in user
app.get('/user-products', authenticate, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products WHERE user_id = $1', [req.user.id]);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.delete('/products/:id', authenticate, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM products WHERE id = $1 AND user_id = $2 RETURNING *', [id, req.user.id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Product not found or not authorized' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all products
app.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/subscribe', authenticate, async (req, res) => {
  const { email, isSubscribed } = req.body;

  try {
    const result = await pool.query(
      'UPDATE users SET is_subscribed = $1 WHERE email = $2 RETURNING *',
      [isSubscribed, email]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Subscription updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add this endpoint to get user subscription status
app.get('/userSubscriptionStatus', authenticate, async (req, res) => {
  try {
    const result = await pool.query('SELECT is_subscribed FROM users WHERE id = $1', [req.user.id]);
    const user = result.rows[0];
    res.json({ isSubscribed: user.is_subscribed });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create an order
app.post('/api/orders/create', authenticate, async (req, res) => {
  const { product, cardDetails } = req.body;

  try {
    const userId = req.user.id; // User ID extracted from the token

    // Simulate payment processing (replace with actual payment processing logic)
    // await processPayment(cardDetails);

    // Insert the new order into the orders table
    const result = await pool.query(
      'INSERT INTO orders (product_id, user_id, product_name, product_description, product_price, product_image, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [product.id, userId, product.name, product.description, product.price, product.image, 'pending']
    );

    const newOrder = result.rows[0];

    // Check if the product exists and update its status
    const productCheckResult = await pool.query('SELECT * FROM products WHERE id = $1', [product.id]);
    
    if (productCheckResult.rows.length > 0) {
      // Update the product to mark it as ordered
      await pool.query(
        'UPDATE products SET ordered = TRUE WHERE id = $1',
        [product.id]
      );
    } else {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(201).json({ order: newOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Get products with 'ordered' status for the logged-in user
app.get('/dashboard/shipments', authenticate, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT name FROM products WHERE user_id = $1 AND ordered = TRUE',
      [req.user.id]
    );

    const orderedProducts = result.rows.map(row => row.name);

    if (orderedProducts.length > 0) {
      const messages = orderedProducts.map(name => `Keep ready your ${name} it will be picked up by Tourcart today`);
      res.json({ messages });
    } else {
      res.json({ messages: [] });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});