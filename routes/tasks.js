const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks_controller');

router.post('/add', tasksController.add);

module.exports = router;