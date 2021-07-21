const router = require('express').Router();
const UserController = require('../controllers/user.controller');

router.post('/register', UserController.register);
router.get('/getUserData/:userId', UserController.getUserData);
router.post('/verifySecurityQuestions', UserController.verifySecurityQuestions);

module.exports = router;