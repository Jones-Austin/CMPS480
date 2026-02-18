import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sort, setSort] = useState('')
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [searchQuery, category, minPrice, maxPrice, sort])

  const fetchProducts = async () => {
    let url = `http://localhost:3001/api/products?`
    if (searchQuery) url += `q=${searchQuery}&`
    if (category && category !== 'All') url += `category=${category}&`
    if (minPrice) url += `min_price=${minPrice}&`
    if (maxPrice) url += `max_price=${maxPrice}&`
    if (sort) url += `sort=${sort}&`

    try {
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data.products)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
  }

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId))
  }

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">MockAmazon</div>
        <form className="search-bar" onSubmit={handleSearch}>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="search-category"
          >
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home">Home</option>
          </select>
          <input
            type="text"
            placeholder="Search MockAmazon"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">🔍</button>
        </form>
        <div className="nav-links">
          <span>Hello, Sign in</span>
          <span>Orders</span>
          <span>Cart ({cartCount})</span>
        </div>
      </header>

      <main className="main-content">
        <aside className="sidebar">
          <h3>Filters</h3>

          <div className="filter-group">
            <h4>Price</h4>
            <div className="price-inputs">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <button onClick={fetchProducts}>Go</button>
          </div>

          <div className="filter-group">
            <h4>Sort By</h4>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="">Featured</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating_desc">Avg. Customer Review</option>
            </select>
          </div>
        </aside>

        <section className="cart-panel">
          <h3>Your Cart</h3>
          {cart.length === 0 ? (
            <p>Cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <span>
                    {item.name} (x{item.qty})
                  </span>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="product-grid">
          {products.length === 0 ? (
            <p>No products found.</p>
          ) : (
            products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{product.name}</h3>
                  <div className="product-rating">
                    {'★'.repeat(Math.round(product.rating))}
                    {'☆'.repeat(5 - Math.round(product.rating))}
                    <span className="rating-count"> {product.rating}</span>
                  </div>
                  <div className="product-price">
                    <span className="currency">$</span>
                    <span className="amount">{Math.floor(product.price)}</span>
                    <span className="fraction">{(product.price % 1).toFixed(2).substring(2)}</span>
                  </div>
                  <div className="prime-badge">Prime</div>
                  <button 
                    className="add-to-cart"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  )
}

export default App
