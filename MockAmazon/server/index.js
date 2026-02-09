const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Mock Product Data
const products = [
    {
        id: 1,
        name: "Wireless Noise Cancelling Headphones",
        category: "Electronics",
        price: 199.99,
        rating: 4.5,
        image: "https://placehold.co/300x300?text=Headphones"
    },
    {
        id: 2,
        name: "Smartphone 5G - 128GB",
        category: "Electronics",
        price: 699.99,
        rating: 4.2,
        image: "https://placehold.co/300x300?text=Smartphone"
    },
    {
        id: 3,
        name: "Running Shoes",
        category: "Fashion",
        price: 89.99,
        rating: 4.7,
        image: "https://placehold.co/300x300?text=Shoes"
    },
    {
        id: 4,
        name: "Coffee Maker Programmatic",
        category: "Home",
        price: 49.99,
        rating: 4.0,
        image: "https://placehold.co/300x300?text=Coffee+Maker"
    },
    {
        id: 5,
        name: "Gaming Laptop Pro",
        category: "Electronics",
        price: 1299.99,
        rating: 4.8,
        image: "https://placehold.co/300x300?text=Laptop"
    },
    {
        id: 6,
        name: "Cotton T-Shirt Pack",
        category: "Fashion",
        price: 29.99,
        rating: 4.3,
        image: "https://placehold.co/300x300?text=T-Shirt"
    },
    {
        id: 7,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 59.99,
        rating: 4.1,
        image: "https://placehold.co/300x300?text=Speaker"
    },
    {
        id: 8,
        name: "Digital Camera 4K",
        category: "Electronics",
        price: 450.00,
        rating: 4.6,
        image: "https://placehold.co/300x300?text=Camera"
    }
];

// API Endpoint: Search & Filter Products
app.get('/api/products', (req, res) => {
    let { q, category, min_price, max_price, sort } = req.query;
    let filteredProducts = products;

    // Filter by Search Query (Name)
    if (q) {
        const query = q.toLowerCase();
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(query)
        );
    }

    // Filter by Category
    if (category && category !== 'All') {
        filteredProducts = filteredProducts.filter(p => 
            p.category === category
        );
    }

    // Filter by Price Range
    if (min_price) {
        filteredProducts = filteredProducts.filter(p => p.price >= parseFloat(min_price));
    }
    if (max_price) {
        filteredProducts = filteredProducts.filter(p => p.price <= parseFloat(max_price));
    }

    // Sort Results
    if (sort) {
        if (sort === 'price_asc') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sort === 'price_desc') {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (sort === 'rating_desc') {
            filteredProducts.sort((a, b) => b.rating - a.rating);
        }
    }

    res.json({
        count: filteredProducts.length,
        products: filteredProducts
    });
});

app.listen(port, () => {
    console.log(`Mock Amazon API running at http://localhost:${port}`);
});
