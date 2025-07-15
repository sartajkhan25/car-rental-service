# 🚗 Carental Booking MVP

A clean and functional MVP for a car rental platform built using the MERN stack. This project demonstrates real-world booking logic with seasonal pricing and availability management.

---

## 🔍 Features at a Glance

- 📅 Search car availability for specific date ranges
- 💸 Seasonal price calculation (peak, mid, off-season)
- ✅ Validations for:
  - Driving license expiry
  - Preventing overlapping bookings
- 🧪 Basic backend test coverage using Jest

---

## 🧰 Technologies Used

### Frontend

- React + TypeScript (Vite)
- Tailwind CSS (CDN-based)
- Axios for API integration

### Backend

- Node.js + Express
- TypeScript
- MongoDB + Mongoose

### Dev Tools

- Jest (testing)
- ESLint & Prettier (formatting)
- REST API (Postman-tested)

---

## 🚀 Getting Started

1. **Clone the project:**
   ```bash
   git clone https://github.com/sartajkhan25/car-rental-service.git
   ```

### Install dependencies:

cd backend && npm install
cd ../frontend && npm install

## ▶️ Running the Project

# Start Backend

cd backend
npm run dev
Ensure MongoDB is running locally:
mongodb://localhost:27017/bolttech-carental

--Start Frontend
cd frontend
npm run dev

# 🔗 API Reference

GET /api/cars/availability
Returns available cars between fromDate and toDate.

POST /api/bookings
Creates a new booking. Requires:

{
"userId": "string",
"carId": "string",
"fromDate": "YYYY-MM-DD",
"toDate": "YYYY-MM-DD"
}

# API Responses

201 — Success
400 — Invalid license
409 — Overlapping booking

# 🗂️ Folder Structure

car-rental-service/
│── components/
│── pages/
│── services/
│── main.tsx
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── index.ts

# ✅ Completed Work

Built full-stack car rental MVP

Applied pricing logic based on seasons

Developed booking constraints

Created a clean UI with Tailwind CSS

Included basic test coverage (backend)

# 🔧 Possible Improvements

User authentication & JWT

Admin dashboard for inventory

Toast notifications for better UX

Dockerized setup

CI/CD (Render, Vercel)

# Maintainer

Sartaj Khan
Frontend + Backend Developer
sartaj2493@gmail.com
user: sartajkhan25
