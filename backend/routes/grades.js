const express = require('express');
const router = express.Router();

// Mock database
let grades = [];

// GET all grades
router.get('/', (req, res) => {
    res.json(grades);
});

// GET grades by student ID
router.get('/student/:id', (req, res) => {
    const studentGrades = grades.filter(grade => grade.studentId === req.params.id);
    res.json(studentGrades);
});

// POST new grade
router.post('/', (req, res) => {
    const newGrade = {
        id: grades.length + 1,
        studentId: req.body.studentId,
        subject: req.body.subject,
        marks: req.body.marks,
        calculatedGrade: calculateGrade(req.body.marks),
    };
    grades.push(newGrade);
    res.status(201).json(newGrade);
});

// PUT update grade
router.put('/:id', (req, res) => {
    const gradeId = parseInt(req.params.id);
    let grade = grades.find(g => g.id === gradeId);
    if (grade) {
        grade.marks = req.body.marks;
        grade.calculatedGrade = calculateGrade(req.body.marks);
        res.json(grade);
    } else {
        res.status(404).send('Grade not found');
    }
});

// DELETE grade
router.delete('/:id', (req, res) => {
    const gradeId = parseInt(req.params.id);
    grades = grades.filter(g => g.id !== gradeId);
    res.status(204).send();
});

// Function to calculate grade based on marks
function calculateGrade(marks) {
    if (marks >= 90) return 'A';
    if (marks >= 80) return 'B';
    if (marks >= 70) return 'C';
    if (marks >= 60) return 'D';
    return 'F';
}

module.exports = router;