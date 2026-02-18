# 🛒 Mock Amazon Store – Module 2 (CMPS 480)

A simple full-stack mock e-commerce application built for **CMPS 480 – Software Engineering**.

This project demonstrates implementation of agreed-upon use cases using a working interface with React (Frontend) and Node.js/Express (Backend).

---

## 🚀 Features Implemented (Module 2)

### 🔎 Product Functionality
- Search products by name
- Filter by category
- Filter by price range (min / max)
- Sort products:
  - Price: Low → High
  - Price: High → Low
  - Rating (Descending)

### 🛒 Cart Functionality
- Add products to cart
- Increase quantity if item already exists
- Remove products from cart
- Dynamic cart item counter in header
- Cart panel displaying selected items

---

## 🧱 Technology Stack

### Frontend
- React
- Vite
- CSS

### Backend
- Node.js
- Express

---

## 📂 Project Structure

```
MockAmazon/
│
├── client/        # React (Vite) frontend
├── server/        # Express backend API
└── README.md      # Project documentation
```

---

## ⚙️ Prerequisites

- Node.js (v14 or higher)
- npm

---

## ▶️ Running the Project

The backend and frontend must be run in **separate terminal windows**.

---

### 1️⃣ Start the Backend Server

Open a terminal and run:

```bash
cd MockAmazon/server
npm install
node index.js
```

You should see:

```
Mock Amazon API running at http://localhost:3001
```

Backend runs at:

```
http://localhost:3001
```

---

### 2️⃣ Start the Frontend Application

Open a **new terminal window** and run:

```bash
cd MockAmazon/client
npm install
npm run dev
```

You should see:

```
Local: http://localhost:5173/
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🧪 Usage

1. Open your browser at:  
   👉 http://localhost:5173  

2. Use the search bar to search products  
3. Filter by category or price range  
4. Sort product results  
5. Click **Add to Cart**  
6. Remove items from the cart  
7. Observe the dynamic cart counter updating  

---

## 📌 Module 2 Requirements Covered

- ✅ Functional working interface  
- ✅ Implemented agreed use cases  
- ✅ Multiple components/pages  
- ✅ Styled with CSS  
- ✅ Working frontend ↔ backend integration  

---

## 🔮 Future Improvements

- Database integration  
- User authentication  
- Persistent cart storage  
- Deployment to live server  
- Additional use cases  

---


