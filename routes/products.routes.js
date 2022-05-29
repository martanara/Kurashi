const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/products.controller');

console.log('product controller', ProductController.getAllProducts);

router.get('/products', ProductController.getAllProducts);
router.get('/product/:id', ProductController.getProductById);
router.post('/products', ProductController.addNewProduct);
router.put('/product/:id', ProductController.editProduct);
router.delete('/product/:id', ProductController.deleteProduct);

module.exports = router;
