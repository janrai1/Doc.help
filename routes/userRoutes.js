const { Router } = require('express')
const express = require('express')
const { LoginController, registerController, authController } = require('../controllers/userctrl');
const authMiddleware = require('../middlewares/authMiddleware');

// router object
const router = express.Router();
//routes
//LOGIN || POST
router.post('/login',LoginController);

//REGISTER || POST
router.post('/register',registerController);
//Auth || POST
router.post('/getUserData', authMiddleware, authController);
module.exports = router;