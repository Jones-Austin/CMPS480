# API v1 – Draft Specification

This document defines the first version of the REST API for the **Store**
niche e-commerce prototype. The API supports the use case:

**UC-01: Browse/Search Products and Add to Cart**

All endpoints return JSON and follow REST conventions.

---

## Base Configuration

**Base Path:** `/api`  
**Protocol:** HTTPS  
**Data Format:** JSON  

---

## Endpoint 1: List or Search Products

### URL
GET/api/products


### Description
Returns a list of all products or a filtered list based on optional query parameters.

### Query Parameters (Optional)
search- keyword to search product names or descriptions
category- product category

### Example Request
GET /api/products?search=headphones&category=audio


### Example Response (200 OK)
/```json
{
  "success": true,
  "products": [
    {
      "id": 101,
      "name": "Studio Headphones",
      "price": 79.99,
      "stock": 12,
      "category": "audio"
    },
    {
      "id": 102,
      "name": "Wireless Earbuds",
      "price": 49.99,
      "stock": 0,
      "category": "audio"
    }
  ]
}
/

---
## Endpoint 2: Get Product Details

### URL
GET/api/products/{id}

### Description
Returns detailed information for a single product

### Example Request
GET /api/products/101

### Example Response (200 OK)
/
{
  "success": true,
  "product": {
    "id": 101,
    "name": "Studio Headphones",
    "description": "Closed-back headphones for mixing and casual listening.",
    "price": 79.99,
    "stock": 12,
    "category": "audio"
  }
}
/
### Example Response (404 Not Found)
/
{
  "success": false,
  "message": "Product not found."
}
/

### Endpoint 3: Add Item to Cart

### URL
POST /api/cart/items

### Description
Adds a product to the user's cart or updates the quantity if the product already exists in the cart

### Example Input JSON
/
{
  "cartId": "guest-abc123",
  "productId": 101,
  "quantity": 1
}
/

### Example Response (200 OK)
/
{
  "success": true,
  "message": "Item added to cart.",
  "cart": {
    "cartId": "guest-abc123",
    "items": [
      {
        "productId": 101,
        "quantity": 1
      }
    ]
  }
}
/

### Example Response (400 Bad Request- Out of Stock)
/
{
  "success": false,
  "message": "Item is out of stock."
}
/


