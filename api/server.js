const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// const authRoutes = require('./routes/auth');
// const productRoutes = require('./routes/products');
// const orderRoutes = require('./routes/orders');
// const categoryRoutes = require('./routes/categories');
// const paymentRoutes = require('./routes/payment');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb+srv://nimamemarzadeh:Test1377@cluster0.bhxhomq.mongodb.net/')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/categories', categoryRoutes);
// app.use('/api/payment', paymentRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
