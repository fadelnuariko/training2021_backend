// Import model Product
const Product = require("../models/Product.js");

// Get semua product
exports.getProducts = async (req, res) => {
    try {
        const product = await Product.findAll();
        res.send(product);
    } catch (err) {
        console.log(err);
    }
}

// Get product berdasarkan id
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(product[0]);
    } catch (err) {
        console.log(err);
    }
}

// Create product baru
exports.createProduct = async (req, res) => {
    try {
        await Product.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update product berdasarkan id
exports.updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (err) {
        console.log(err);
    }
}


// Delete product berdasarkan id
exports.deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}