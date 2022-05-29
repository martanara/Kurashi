const Order = require('../models/order.model');
const NODE_ENV = process.env.NODE_ENV;

exports.getAllOrders = async (req, res) => {
  try {
    const result = await Order
      .find()
    if(!result) res.status(404).json({ orders: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    if(NODE_ENV === 'production') console.log('Database error...');
    else res.status(500).json(err);
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const result = await Order
      .findById(req.params.id);
    if(!result) res.status(404).json({ order: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    if(NODE_ENV === 'production') console.log('Database error...');
    else res.status(500).json(err);
  }
};

exports.addNewOrder = async (req, res) => {
  const { customerInfo, orderDetails } = req.body;

  try {
    const newOrder = new Order({ customerInfo, orderDetails });
    await newOrder.save();
    res.json(newOrder);
  } catch(err) {
    if(NODE_ENV === 'production') console.log('Database error...');
    else res.status(500).json(err);
  }
};

exports.editOrder = async (req, res) => {
  const { customerInfo, orderDetails } = req.body;

  try {
    const order = await order.findById(req.params.id);
    if(order){
      order.customerInfo = customerInfo;
      order.orderDetails = orderDetails;
      await order.save();
      res.json(await order.findById(req.params.id));
    } else res.status(404).json({ message: 'Not found' });
  }
  catch(err) {
    if(NODE_ENV === 'production') console.log('Database error...');
    else res.status(500).json(err);
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const order = Order.findById(req.params.id);
    if(order){
      await Order.deleteOne({ _id: req.params.id });
      res.json(req.params.id);
    } else res.status(404).json({ message: 'Not found' });
  }
  catch(err) {
    if(NODE_ENV === 'production') console.log('Database error...');
    else res.status(500).json(err);
  }
};

