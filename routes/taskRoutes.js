// routes/taskRoutes.js
const express = require('express');
const { createTask } = require('../controllers/taskController');
const { getTasks } = require('../controllers/taskController');
const { deleteTask } = require('../controllers/taskController');

const router = express.Router();

router.post('/tasks', createTask); // Create task
router.get('/tasks', getTasks);          // Get tasks

module.exports = router;