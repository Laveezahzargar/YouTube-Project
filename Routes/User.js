

const express = require("express");
const router = express.Router();
const UserController = require('../Controllers/User');


router.post('/signUp', UserController.signUp);

router.post('/signIn', UserController.signIn);

router.post('/logout', UserController.logout);




module.exports = router;