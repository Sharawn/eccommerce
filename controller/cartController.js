app.get('/', (req, res) => {
  // Assuming you have some way to get the cart item count
  const cartItemCount = getCartItemCount(); // Implement this function based on your cart logic
  res.render('home', { cartItemCount: cartItemCount });
});



exports.getProductsPage = (req, res) => {
  res.render('cart');
};