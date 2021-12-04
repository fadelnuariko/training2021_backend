// import sequelize
const Sequelize = require("sequelize");

// create connection
const db = new Sequelize('db_produk', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = db;