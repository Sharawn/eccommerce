const db = require('../config/db');
exports.getHomePage = (req, res) => {
  res.render('home'); // Ensure this matches the name of your EJS file without .ejs
};



// Controller for getting the home page data
exports.getHomePage = async (req, res) => {
    try {
        // Fetch the featured products for the home page
        const [rows] = await db.query(`
            SELECT id, name, description, price, image_url, category_name, display_order
            FROM home_featured_products
            ORDER BY display_order ASC
        `);

        // Render the home page with the retrieved data
        res.render('home', { featuredProducts: rows });
    } catch (err) {
        console.error('Error fetching home page data:', err);
        res.status(500).send('Server Error');
    }
};
