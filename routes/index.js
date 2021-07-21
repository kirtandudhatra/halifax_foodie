const router = require('express').Router();
const userRoutes = require('./user.routes');
const orderRoutes = require('./order.routes');
const feedbackRoutes = require('./feedback.routes');
const restaurantRoutes = require('./restaurant.routes');

//user routes
router.use('/user', userRoutes);
router.use('/order', orderRoutes);
router.use('/feedback', feedbackRoutes);
router.use('/restaurant', restaurantRoutes);

module.exports = router;
