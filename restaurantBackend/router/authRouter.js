const express = require('express');
const { loginController, registerController, logoutController } = require('../controller/authController');
const router = express.Router();

router.post('/register', registerController);
router.get('/login', loginController);
router.get('/logout', logoutController);

module.exports = router;