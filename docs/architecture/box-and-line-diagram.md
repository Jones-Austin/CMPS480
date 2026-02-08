# Software Architecture – Box-and-Line Diagram

This document describes the high-level software architecture for the NovaStore
niche e-commerce prototype. The system follows a standard three-tier web
architecture consisting of a front end, back end API, and database.

---

## Architecture Overview

The application is composed of three primary components:

1. Front End (Client)
2. Back End (API Server)
3. Database

Each component is responsible for a specific set of tasks, and they communicate
with each other through well-defined interfaces.

---

## Components (Boxes)

### 1. Front End – Client Layer
**Technologies:**
- HTML
- CSS
- JavaScript

**Responsibilities:**
- Display product listings and product details
- Allow users to search and browse products
- Allow users to add items to a shopping cart
- Send requests to the back end API
- Render responses returned by the API

The front end runs entirely in the user’s web browser and communicates with the
back end using HTTPS requests that send and receive JSON data.

---

### 2. Back End – API Layer
**Technologies:**
- Node.js
- Express.js

**Responsibilities:**
- Expose RESTful API endpoints
- Validate and sanitize incoming requests
- Enforce business rules (e.g., stock availability)
- Process cart operations
- Communicate with the database
- Return structured JSON responses to the client

The API server acts as the central control layer and ensures that all access to
the database occurs through controlled, validated endpoints.

---

### 3. Database – Data Layer
**Technologies:**
- MySQL

**Responsibilities:**
- Store product information
- Store cart and cart item data
- Store user and admin data (future modules)
- Persist application state between requests

The database is never accessed directly by the client and can only be queried
by the API server using parameterized SQL statements.

---

## Interactions (Lines)

### Front End → Back End
- Protocol: HTTPS
- Data Format: JSON
- Example Requests:
  - GET /api/products
  - GET /api/products/{id}
  - POST /api/cart/items
  - GET /api/cart

### Back End → Database
- Protocol: SQL over database connection
- Query Type:
  - SELECT product data
  - INSERT or UPDATE cart items
  - SELECT cart summaries

### Database → Back End
- Returns query results to the API server
- API processes results and formats JSON responses

### Back End → Front End
- JSON responses containing:
  - success flags
  - requested data
  - error messages (when applicable)

---

## Text-Based Box-and-Line Diagram

+-----------------------------+
|        Client Browser       |
|     (HTML / CSS / JS)       |
+-----------------------------+
              |
              | HTTPS requests / JSON responses
              v
+-----------------------------+
|  Node.js + Express API      |
|  - REST endpoints           |
|  - Input validation         |
|  - Business logic           |
+-----------------------------+
              |
              | Parameterized SQL queries
              v
+-----------------------------+
|        MySQL Database       |
|  - Products                 |
|  - Carts                    |
|  - Cart Items               |
+-----------------------------+


- The client browser sends HTTPS requests containing JSON payloads to the API.
- The API processes requests, applies business rules, and queries the database.
- The database returns query results to the API.
- The API formats responses as JSON and returns them to the client.
