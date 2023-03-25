const { Router } = require('express')
const express = require('express')
const { LoginController, registerController } = require('../controllers/userctrl');

// router object
const router = express.Router();
//routes
//LOGIN || POST
router.post('/login',LoginController);

//REGISTER || POST
router.post('/register',registerController);

module.exports = router;