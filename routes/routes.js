// Import express
const express = require("express");
// Import Controller Product
const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/Product.js");

// Init express router
const router = express.Router();

// Route get semua product
router.get('/products', getProducts);
// Route get product by id
router.get('/products/:id', getProductById);
// Route create product baru
router.post('/products', createProduct);
// Route update product by id
router.put('/products/:id', updateProduct);
// Route delete product by id
router.delete('/products/:id', deleteProduct);

// export router
module.exports = router;