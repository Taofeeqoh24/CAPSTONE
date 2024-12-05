// controllers/taskController.js
const Task = require('../models/Task');

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const { title, description, deadline, priority } = req.body;

        const task = new Task({
            userId,
            title,
            description,
            deadline,
            priority,
        });

        await task.save();
        res.status(201).json({ message: 'Task created successfully', task });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all tasks for the logged-in user
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId });
        res.json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        await Task.findByIdAndDelete(taskId);
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
