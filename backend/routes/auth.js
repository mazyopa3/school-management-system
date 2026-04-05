const express = require('express');
const router = express.Router();

// Mock authentication data
let users = [];

// Register a new user
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (users.find(user => user.username === username)) {
        return res.status(400).send('User already exists');
    }
    users.push({ username, password });
    res.status(201).send('User registered');
});

// Login a user
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (!user || user.password !== password) {
        return res.status(400).send('Invalid credentials');
    }
    res.status(200).send('Login successful');
});

module.exports = router;