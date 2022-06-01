const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: { type: Array, required: true },
  productTotal: { type: Number, required: true },
  shippingFee: { type: Number, required: true },
  comment: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  country: { type: String, required: true },
  address: { type: String, required: true },
  postalCode: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
