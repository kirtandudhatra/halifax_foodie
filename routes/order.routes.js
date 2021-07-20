const router = require('express').Router();
const OrderController = require('../controllers/order.controller');

router.post('/placeorder', OrderController.placeOrder);

module.exports = router;