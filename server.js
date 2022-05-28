const express = require('express');
const cors = require('cors');
const path = require('path');
// const mongoose = require('mongoose');

// const usersRoutes = require('./routes/users.routes');
// const postsRoutes = require('./routes/posts.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// /* API ENDPOINTS */
// app.use('/api', postsRoutes);
// app.use('/api', usersRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '/client/build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

// const NODE_ENV = process.env.NODE_ENV;
// let dbUri = '';

// /* MONGOOSE */

// if(NODE_ENV === 'production') dbUri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.rt8m7.mongodb.net/BulletinBoard?retryWrites=true&w=majority`;
// else dbUri = 'mongodb://localhost:27017/bulletinBoard';

// mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.once('open', () => {
//   console.log('Successfully connected to the database');
// });
// db.on('error', err => {
//   if(process.env.production === true) console.log('Couldn\'t connect to db...');
//   else console.log(err);
// });

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
