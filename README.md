# RShoping

RShoping is a full-stack e-commerce web application for clothing and accessories, built with React (frontend) and Node.js/Express/MongoDB (backend). It allows users to browse, search, and view products by category and mode (men, women, children), while admins can manage the product catalog.

## Features

### Client Side
- Browse products by mode (Homme, Femme, Enfant) and category (vêtements, chaussures, etc.)
- View latest products and product details
- Search and filter products
- User authentication (login form UI present)
- Responsive design with navigation and footer

### Admin Side
- Admin dashboard for product management
- Create, update, and delete products
- Upload product images
- View product list and details

## Technologies Used
- **Frontend:** React, React Router, Axios, Redux
- **Backend:** Node.js, Express, MongoDB, Mongoose, Multer (for image upload), CORS

## Folder Structure

```
RShoping/
  backend/         # Express server, MongoDB models, API routes
    models/        # Mongoose schemas
    public/imagesProduit/  # Uploaded product images
    serveur.js     # Main server file
    package.json   # Backend dependencies
  frontend/        # React app
    public/        # Static assets
    src/           # React components and pages
    package.json   # Frontend dependencies
```

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB running locally (default: mongodb://127.0.0.1:27017/Rshoping)

### 1. Backend Setup
```bash
cd backend
npm install
npm start
```
- The backend server will run on [http://localhost:3001](http://localhost:3001)

### 2. Frontend Setup
```bash
cd frontend
npm install
npm start
```
- The frontend React app will run on [http://localhost:3000](http://localhost:3000)

## Usage
- Open the frontend in your browser.
- Browse products by selecting categories or modes.
- Admins can access `/admin` for product management (no authentication enforced by default).
- Product images are uploaded and served from the backend.

## Product Model
Each product has the following fields:
- `nom` (String): Name
- `description` (String): Description
- `categorie` (String): Category (e.g., homme, femme, enfant)
- `marque` (String): Brand
- `prix` (Number): Price
- `taille` (String): Size(s)
- `quantiteStock` (Number): Stock quantity
- `image` (String): Image filename
