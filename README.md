# TechSpace – Modern E-commerce Platform

## Introduction

**TechSpace** is a modern, scalable, and high-performance e-commerce platform designed to provide a seamless shopping experience for customers.  
Built with a robust tech stack, it supports advanced product browsing, filtering, secure checkout, and efficient admin management.

---

## Project Description

With **TechSpace**, customers can explore products across various categories, use advanced search and filtering options, manage their cart, place orders, and leave reviews for purchased items.  
Admins have complete control over products, orders, and user management through an intuitive dashboard.

### [Live Demo](https://tech-space-client.vercel.app)

```bash
https://tech-space-client.vercel.app
```

---

## Features

### Customer Features

- **User Authentication** – Secure sign-up and login via email/password.
- **Product Browsing** – Explore a wide range of products across categories.
- **Advanced Search & Filters** – Filter by category, price range, and more.
- **Cart Management** – Add products to cart and proceed to checkout.
- **Order Tracking** – View detailed order history and status updates.
- **Product Reviews** – Leave and delete reviews for purchased products.

### Admin Features

- **Admin Dashboard** – Monitor and manage the platform.
- **User & Vendor Management** – Approve, suspend, or delete accounts.
- **Order Management** – View and update order statuses.

---

## Technology Stack

### **Frontend**

- React.js
- Redux Toolkit & RTK Query
- Shadcn UI
- Tailwind CSS

### **Backend**

- Node.js & Express.js
- MongoDB & Mongoose
- Cloudinary (Image Storage)
- SSL Commerz (Payment Gateway)
- JWT (Authentication & Authorization)

---

## Installation Guide

Follow these steps to set up **TechSpace** locally.

### **Prerequisites**

- Node.js installed
- Code editor (e.g., VS Code)

---

### **Frontend Setup**

1. **Clone the repository**

   ```bash
   git clone https://github.com/md-suhag/tech-space.git
   ```

2. **Navigate to the project folder**

   ```bash
   cd tech-space
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Create environment variables**  
   Create a `.env.local` file in the frontend root directory and add:

   ```env
   VITE_BASE_URL=your_backend_base_url   # e.g., http://localhost:4005/api
   ```

5. **Run the frontend**
   ```bash
   npm run dev
   ```

---

### **Backend Setup**

6. **Clone the backend repository**

   ```bash
   git clone https://github.com/md-suhag/tech-space-server.git
   ```

7. **Navigate to the server directory**

   ```bash
   cd tech-space-server
   ```

8. **Install dependencies**

   ```bash
   npm install
   ```

9. **Create environment variables**  
   Create a `.env` file in the server root directory and add:

   ```env
   CLIENT_URL = your_frontend_url
   MONGO_URI = mongodb_connection_url
   JWT_SECRET = jwt_secret
   CLOUDINARY_CLOUD_NAME = cloudinary_name
   CLOUDINARY_API_KEY = cloudinary_api_key
   CLOUDINARY_API_SECRET = cloudinary_api_secret
   SSL_COMMERZ_API_URL = ssl_commerz_api_url
   SSL_COMMERZ_STORE_ID = ssl_commerz_store_id
   SSL_COMMERZ_STORE_PASSWORD = ssl_commerz_store_password
   SSL_COMMERZ_TRANSACTION_QUERY_API = ssl_commerz_transaction_query_api
   SERVER_URL = your_server_url   # e.g., http://localhost:4005
   ```

10. **Run the backend**
    ```bash
    npm run dev
    ```

---

### **Access the Application**

Once both frontend and backend are running, open:

```text
http://localhost:5173
```

---

## Usage

### For Customers

- Browse products and apply filters.
- Add items to the cart and checkout using **SSL Commerz**.
- Track orders and leave reviews from the customer dashboard.

### For Admins

- Manage products, orders, and users via the admin dashboard.
- Monitor platform activities in real-time.

---

## Thank You

We appreciate your interest in **TechSpace**.  
Happy shopping & coding! 💻
