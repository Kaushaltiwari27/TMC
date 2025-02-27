# MERN Stack E-Commerce Website

## Project Overview
This project is a step-by-step tutorial to build and deploy a full-stack e-commerce website using the MERN stack: **MongoDB, Express.js, React.js, and Node.js**. It also incorporates online payment gateways **Stripe** and **Razorpay** for a seamless shopping experience. The complete application is deployed on **Vercel**.

## Features
### User Features:
1. **Explore Products:** Users can browse a variety of products available on the store.
2. **Filter and Sort Products:** Filter products by categories and sort them by specific criteria.
3. **Add to Cart:** Add products to the cart, choosing variants like size.
4. **Place Orders:** Place orders by providing delivery details and choosing a payment method.
5. **Payment Options:** Pay using either:
   - Cash on Delivery (COD)
   - Online payment via Stripe or Razorpay.

### Admin Dashboard:
1. **Product Management:** Admins can upload, update, or delete products.
2. **Order Management:** View and manage customer orders.
3. **Store Overview:** Monitor all products and their details.

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js and Express.js
- **Database:** MongoDB
- **Payment Gateways:** Stripe, Razorpay
- **Deployment Platform:** Vercel

## Project Highlights
- **Frontend:** The user interface is built using React.js, offering a dynamic and responsive shopping experience.
- **Backend APIs:** Backend services are developed using Node.js and Express.js, ensuring fast and secure transactions.
- **Database:** All user, product, and order data is stored and managed in MongoDB.
- **Payment Integration:** Integrated Stripe and Razorpay to provide secure and reliable online payments.
- **Deployment:** Deployed the application on Vercel for easy accessibility.

## Deployment Configuration
To deploy the project on Vercel, ensure to include the following configuration:

[Vercel JSON Config for Deployment](https://github.com/GreatStackDev/note...)

## Getting Started
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd mern-ecommerce
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. For backend services, navigate to the backend directory and run:
   ```bash
   node server.js
   ```
6. Access the application at `http://localhost:4000/`.

## License
This project is licensed under the [MIT License](LICENSE).
