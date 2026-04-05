'use strict';

const express = require('express');
const router = express.Router();

// Mock attendance data
let attendanceRecords = [];

// GET /attendance - Retrieve all attendance records
router.get('/', (req, res) => {
    res.json(attendanceRecords);
});

// POST /attendance - Create a new attendance record
router.post('/', (req, res) => {
    const newRecord = req.body;
    attendanceRecords.push(newRecord);
    res.status(201).json(newRecord);
});

// PUT /attendance/:id - Update an existing attendance record
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const index = attendanceRecords.findIndex(record => record.id === id);
    if (index !== -1) {
        attendanceRecords[index] = { ...attendanceRecords[index], ...req.body };
        res.json(attendanceRecords[index]);
    } else {
        res.status(404).send('Record not found');
    }
});

// DELETE /attendance/:id - Delete an attendance record
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = attendanceRecords.findIndex(record => record.id === id);
    if (index !== -1) {
        attendanceRecords.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Record not found');
    }
});

module.exports = router;