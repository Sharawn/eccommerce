/*
const express = require('express');
const path = require('path');
const digitallRouter = require('../routes/digitallRouter'); // Adjust based on relative path



const app = express();
const port = process.env.PORT || 3000;



const fs = require('fs');
const viewsPath = path.join(__dirname, 'views');

console.log('Views Path:', viewsPath);
fs.readdir(viewsPath, (err, files) => {
    if (err) {
        console.error('Error reading views directory:', err);
    } else {
        console.log('Available view files:', files);
    }
});


// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded data (from forms)
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data (if needed)
app.use(express.json());

// Use digistallRouter for routing
app.use('/', digitallRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

*/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


// Import routes
const digitallRouter = require('../routes/digitallRouter');

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Static Files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', digitallRouter);

// Database Connection (example)
const db = require('../config/db.js');

// Server Listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
