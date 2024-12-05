require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express()

//middleware
app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

//connect to db
connectDB();

//routes
app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'assets/html/index.html'));
});

app.get('/register', (_req, res) => {
    res.sendFile(path.join(__dirname, 'assets/html/register.html'));
});

app.get('/login', (_req, res) => {
    res.sendFile(path.join(__dirname, 'assets/html/login.html'));
});

app.get('/tasks', (_req, res) => {
    res.sendFile(path.join(__dirname, 'assets/html/tasks.html'));
});

//starting the server
const PORT = parseInt (process.env.PORT);

app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`)
});
