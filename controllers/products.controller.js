const Product = require('../models/product.model');
const NODE_ENV = process.env.NODE_ENV;

exports.getAllProducts = async (req, res) => {
  try {
    const result = await Product
      .find()
    if(!result) res.status(404).json({ products: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    if(NODE_ENV === 'production') console.log('Database error...');
    else res.status(500).json(err);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const result = await Product
      .findById(req.params.id);
    if(!result) res.status(404).json({ product: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    if(NODE_ENV === 'production') console.log('Database error...');
    else res.status(500).json(err);
  }
};

exports.addNewProduct = async (req, res) => {
  const { name, price, description, color, img, sizes, variants, categories } = req.body;

  try {
    const newProduct = new Product({ name, price, description, color, img, sizes, variants, categories });
    await newProduct.save();
    res.json(newProduct);
  } catch(err) {
    if(NODE_ENV === 'production') console.log('Database error...');
    else res.status(500).json(err);
  }
};

exports.editProduct = async (req, res) => {
  const { name, price, description, color, img, sizes, variants, categories } = req.body;

  try {
    const product = await product.findById(req.params.id);
    if(product){
      product.name = name;
      product.price = price;
      product.description = description;
      product.color = color;
      product.img = img;
      product.sizes = sizes;
      product.variants = variants;
      product.categories = categories;
      await product.save();
      res.json(await product.findById(req.params.id));
    } else res.status(404).json({ message: 'Not found' });
  }
  catch(err) {
    if(NODE_ENV === 'production') console.log('Database error...');
    else res.status(500).json(err);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const Product = Product.findById(req.params.id);
    if(Product){
      await Product.deleteOne({ _id: req.params.id });
      res.json(req.params.id);
    } else res.status(404).json({ message: 'Not found' });
  }
  catch(err) {
    if(NODE_ENV === 'production') console.log('Database error...');
    else res.status(500).json(err);
  }
};
