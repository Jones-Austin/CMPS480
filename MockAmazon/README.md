# Mock Amazon Store

A simple mock e-commerce application demonstrating **Use Case 1: Search & Filter**. Built with React (Frontend) and Node.js/Express (Backend).

## Prerequisites

-   [Node.js](https://nodejs.org/) (v14 or higher) installed on your machine.

## Project Structure

-   `client/`: Frontend application (Vite + React).
-   `server/`: Backend API (Express).

## Getting Started

You will need to run the **Backend** and **Frontend** in separate terminal windows.

### 1. Start the Backend Server

1.  Open a terminal.
2.  Navigate to the server directory:
    ```bash
    cd server
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the server:
    ```bash
    node index.js
    ```
    *You should see: `Mock Amazon API running at http://localhost:3001`*

### 2. Start the Frontend Application

1.  Open a **new** terminal window.
2.  Navigate to the client directory:
    ```bash
    cd client
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
    *You should see: `Local: http://localhost:5173/`*

### 3. Usage

1.  Open your browser to [http://localhost:5173](http://localhost:5173).
2.  **Search**: Type a product name (e.g., "headphone").
3.  **Filter**: Use the sidebar to filter by Category or Price.
4.  **Sort**: Use the dropdown to sort results.
