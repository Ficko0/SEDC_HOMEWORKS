import { Router } from "express";
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const router = Router(); // kreiranje na Router.
const studentPath = path.join(import.meta.dirname, '..', 'data', 'students.json');

// Get all students
router.get('/students', (req, res) => {
    // 1. Get students from the JSON (dataBase)
    const strStudents = fs.readFileSync(studentPath);

    // 2. Parse the students.
    const students = JSON.parse(strStudents);

    // 3. Send the students to req.
    res.send(students);
})

// Create a student 
router.post('/students', (req, res) => {
    const student = req.body;

    const newStudent = {
        ...student,
        id: uuidv4(),
    };

    console.log(newStudent)

    const students = JSON.parse(fs.readFileSync(studentPath));
    students.push(newStudent);

    const strStudents = JSON.stringify(students);
    fs.writeFileSync(studentPath, strStudents);

    res.status(201).send(newStudent);

    console.log('STUDENT', student);

    res.sendStatus(201);
});

// Update a student

export default router;