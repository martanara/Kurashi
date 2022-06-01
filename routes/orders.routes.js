const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/orders.controller');

router.get('/orders', OrderController.getAllOrders);
router.get('/order/:id', OrderController.getOrderById);
router.post('/orders', OrderController.addNewOrder);
router.delete('/order/:id', OrderController.deleteOrder);

module.exports = router;
