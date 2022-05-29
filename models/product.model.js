const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  img: { type: String, required: true },
  sizes: { type: Array, },
  variants: { type: Array, },
  categories: { type: Array, },
});

module.exports = mongoose.model('Product', productSchema);
