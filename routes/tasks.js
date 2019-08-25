//require the express server and router
const express = require('express');
const router = express.Router();
//require the task controller for related actions
const tasksController = require('../controllers/tasks_controller');
//route for adding the task
router.post('/add', tasksController.add);
//route for dleting the task
router.post('/delete', tasksController.delete);

module.exports = router;