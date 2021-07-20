const router = require('express').Router();
const userRoutes = require('./user.routes');

//user routes
router.use('/user', userRoutes);

module.exports = router;
