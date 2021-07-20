const router = require('express').Router();
const OrderController = require('../controllers/order.controller');

router.get('/placeorder', OrderController.placeOrder);

module.exports = router;