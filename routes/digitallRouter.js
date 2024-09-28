const express = require('express');
const router = express.Router();
const path = require('path');
const homeController = require('../controller/homeController');

router.get('/index', (req, res) => {
  res.render('index');
});

// Define routes
router.get('/', (req, res) => {
  res.render('home');  // or another template like 'home.ejs'
});

router.get('/home', (req, res) => {
  res.render('home');
});

router.get('/products', (req, res) => {
  res.render('product');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/cart', (req, res) => {
  res.render('cart');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/positions', (req, res) => {
  res.render('positions');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/account', (req, res) => {
  res.render('account');
});

router.get('/index', (req, res) => {
  res.render('index');
});

router.get('/order', (req, res) => {
  res.render('order');
});


function getCartItemCount() {
  // Implement your logic to get the cart item count
  // For now, we'll return a dummy value
  return 0;
}

router.get('/cart', (req, res) => {
  const cartItemCount = getCartItemCount();
  res.render('home', { cartItemCount: cartItemCount });
});

module.exports = router;
// Route for home page
//router.get('/', homeController.getHomePage);

// Export the router

module.exports = router;
