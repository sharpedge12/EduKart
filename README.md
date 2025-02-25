# EduKart - MERN Stack E-Commerce Platform

## Description

EduKart is a full-stack e-commerce platform built with the MERN stack (MongoDB, Express, React, and Node.js). It provides a seamless shopping experience for users and includes an admin dashboard to manage products, orders, and user profiles.

## Features

- User Authentication and Authorization (JWT)
- Product browsing, searching, and filtering
- Shopping Cart functionality
- Payment integration
- Admin dashboard for managing products, orders, and users
- Cloudinary integration for image uploads
- Responsive design

---

## Pages and Screenshots

### 1. Home Page

This is the main landing page of the application, displaying featured products and categories.
![Home Page](https://res.cloudinary.com/drthsaowz/image/upload/v1740483626/assets/Screenshot_2025-02-25_170852_m7qpeu.png)

---

### 2. Login Page

The login page allows users to enter their credentials and log in to their accounts.
![Login Page](https://res.cloudinary.com/dqioxqal2/image/upload/v1729694713/2_kx0m3i.png)

---

### 3. Register Page

New users can create an account by filling out this registration form.
![Register Page](https://res.cloudinary.com/dqioxqal2/image/upload/v1729694713/3_ejlgyn.png)

---

### 4. Product Page

Browse a list of products available on the platform.
![Product Page](https://res.cloudinary.com/drthsaowz/image/upload/v1740483833/assets/Screenshot_2025-02-25_171340_bk44mr.png)

---

### 5. Product Details Page

Detailed information about a specific product including price, description, and reviews.
![Product Details Page](https://res.cloudinary.com/drthsaowz/image/upload/v1740483872/assets/Screenshot_2025-02-25_171421_wdialf.png)

---

### 6. Add to Cart Page

Users can add items to their shopping cart and review their cart before proceeding to checkout.
![Add To Cart Page](https://res.cloudinary.com/drthsaowz/image/upload/v1740484025/assets/Screenshot_2025-02-25_171653_tjihlr.png)

---

### 7. Payment Page

A secure payment page where users can enter payment information to complete the purchase.
![Payment Page](https://res.cloudinary.com/dqioxqal2/image/upload/v1729694713/8_ftoyzw.png)

---

### 8. User Profile Page

The user profile page allows users to view and update their personal details, view order history, etc.
![User Profile Page](https://res.cloudinary.com/drthsaowz/image/upload/v1740484188/assets/Screenshot_300_cqzzje.png)

---

### 9. Admin Dashboard

Admins can manage products, view all orders, and handle user management.
![Admin Dashboard](https://res.cloudinary.com/drthsaowz/image/upload/v1740484461/assets/Screenshot_301_aonvsv.png)

---

### 10. Admin Order Details Page

View and manage order details from this page.
![Admin Order Details](https://res.cloudinary.com/drthsaowz/image/upload/v1740484596/assets/Screenshot_2025-02-25_172614_xysqov.png)

---

### 11. Admin Product Page

Admins can add, edit, and delete products.
![Admin Product Page](https://res.cloudinary.com/drthsaowz/image/upload/v1740484363/assets/Screenshot_2025-02-25_172233_rdnary.png)

---

## Technologies Used

- **Frontend**: React, Redux, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **File Storage**: Cloudinary for image uploads
- **Payment Integration**: Stripe API

---

## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `tests` - This holds all of our server tests that we have defined
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!

---

## Installation and Setup

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/sharpedge12/EduKart
   ```
