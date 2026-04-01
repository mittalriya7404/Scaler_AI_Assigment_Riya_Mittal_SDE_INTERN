# 🛒 Scaler AI Assignment – E-Commerce Application

🚀 **Live Demo:**  
https://scaler-ai-assigment-riya-mittal-sde.vercel.app/

**🌐 Live Links**

- Frontend: https://scaler-ai-assigment-riya-mittal-sde.vercel.app/
- Backend: https://scaler-ai-assigment-riya-mittal-sde.onrender.com

📂 **GitHub Repository:**  
https://github.com/mittalriya7404/Scaler_AI_Assigment_Riya_Mittal_SDE_INTERN

---

## 📌 Overview

This is a full-stack e-commerce application built as part of the Scaler AI assignment.  
The app allows users to browse products, manage cart items, and place orders.

---

## 🛠️ Tech Stack

### 🔹 Frontend
- React.js  
- Axios  
- CSS / Tailwind  

### 🔹 Backend
- Node.js  
- Express.js  

### 🔹 Database
- PostgreSQL (Neon)

### 🔹 Deployment
- Frontend: Vercel  
- Backend: Render  
- Database: Neon  

---

## ⚙️ Features

**Product Browsing**
- Browse a wide range of products with detailed information
- Dynamic product listing fetched from backend (PostgreSQL)
- Clean and responsive UI for better user experience
- Modern carousel UI with swipe/scroll support for an improved browsing experience


**Search & Filtering**
- Search products instantly by name

**Cart Management**
- Add items to cart
- Update quantity dynamically
- Remove items from cart
- Real-time cart state synchronization


**Order Management**
- Place orders seamlessly
- View order summary before checkout
- Store order details in database
- Persistent order history


**Backend & Database Integration**
- RESTful APIs built with Node.js & Express
- PostgreSQL database integration
- Efficient query handling using connection pooling
- Structured relational data (users, products, orders, cart)


**UI/UX Features**
- Responsive design (mobile + desktop)
- Clean layout similar to e-commerce platforms
- User-friendly navigation


🧠 Additional Highlights (IMPORTANT 🔥)
- Proper state management in React
- API integration with error handling
- CORS handling between frontend & backend
- Scalable project structure (services, routes, controllers)

---

## 📂 Project Structure
```
project-root/
│
├── client/ # React App
├── server/ # Express Server
│ ├── routes/
│ ├── config/
│ └── controllers/
| └── services/
│
└── README.md
```


---

## 🚀 Setup Instructions

### 🔹 1. Clone the repository
git clone https://github.com/mittalriya7404/Scaler_AI_Assigment_Riya_Mittal_SDE_INTERN.git

cd Scaler_AI_Assigment_Riya_Mittal_SDE_INTERN

---

### 🔹 2. Setup Backend
---
cd backend
npm install


Run backend:
npm start

---

### 🔹 3. Setup Frontend


cd frontend
npm install


Run frontend:
npm run dev


## ⚠️ Assumptions

- Cart data is dynamic and may initially be empty  
- No authentication is implemented  
- Product data is preloaded in the database    

---

## 🧪 API Endpoints

| Method | Endpoint       | Description           |
|--------|--------------|----------------------|
| GET    | /products     | Fetch all products   |
| GET    | /cart         | Get cart items       |
| PUT    | /cart/:id     | Update cart quantity |
| POST   | /orders       | Create order         |

---

## 🚀 Deployment

- Backend deployed on Render  
- Frontend deployed on Vercel  
- Database hosted on Neon  

---

## 👨‍💻 Author

**Riya Mittal**  
Scaler AI Assignment  

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
