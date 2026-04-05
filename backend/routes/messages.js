'use strict';

const express = require('express');
const router = express.Router();

// Mock messages database
let messages = [];

// GET all messages
router.get('/', (req, res) => {
    res.json(messages);
});

// POST a new message
router.post('/', (req, res) => {
    const { content } = req.body;
    const newMessage = { id: messages.length + 1, content };
    messages.push(newMessage);
    res.status(201).json(newMessage);
});

// PUT to update a message
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    const messageIndex = messages.findIndex(msg => msg.id === parseInt(id));

    if (messageIndex !== -1) {
        messages[messageIndex].content = content;
        res.json(messages[messageIndex]);
    } else {
        res.status(404).json({ message: 'Message not found' });
    }
});

// DELETE a message
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    messages = messages.filter(msg => msg.id !== parseInt(id));
    res.status(204).send();
});

module.exports = router;