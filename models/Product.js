const Sequelize = require("sequelize");

const db = require("../config/database.js");

const { DataTypes } = Sequelize;

const Product = db.define('products', {
    title: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    }
}, {
    freezeTableName: true
});

module.exports = Product;