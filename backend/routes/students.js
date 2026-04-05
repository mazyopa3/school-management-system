const express = require('express');
const router = express.Router();

// Mock data for students
let students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 }
];

// Get all students
router.get('/', (req, res) => {
    res.json(students);
});

// Get a student by ID
router.get('/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

// Create a new student
router.post('/', (req, res) => {
    const newStudent = { id: students.length + 1, ...req.body };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// Update a student
router.put('/:id', (req, res) => {
    const index = students.findIndex(s => s.id == req.params.id);
    if (index !== -1) {
        students[index] = { id: students[index].id, ...req.body };
        res.json(students[index]);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

// Delete a student
router.delete('/:id', (req, res) => {
    const index = students.findIndex(s => s.id == req.params.id);
    if (index !== -1) {
        students.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

module.exports = router;