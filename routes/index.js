//require the express server and router
const express = require('express');
const router = express.Router();
//require the home controller 
const homeController = require('../controllers/home_controller');
//route for home
router.get('/', homeController.home);
//forward the requests related to tasks add and delete
router.use('/tasks', require('./tasks'));

module.exports = router;