const { Router } = require('express')
const express = require('express')
const { LoginController, registerController } = require('../controllers/userctrl');

// router object
const router = express.Router();
//routes
//LOGIN || POST
Router.post('/login',LoginController);

//REGISTER || POST
Router.post('/register',registerController);
module.express= router;