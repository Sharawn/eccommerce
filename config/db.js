const mysql = require('mysql2');

// Create a connection pool for MySQL database
const pool = mysql.createPool({
    host: 'localhost',  // Your database host
    user: 'root',       // Your database user
    password: '', // Your database password
    database: 'gadgetstore_db',  // Database name
    waitForConnections: true,
    connectionLimit: 10, // Adjust based on load
    queueLimit: 0
});

// Export the pool to use in other modules
module.exports = pool.promise();
