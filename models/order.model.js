const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerInfo: { type: Object, required: true },
  orderDetails: { type: Object, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
