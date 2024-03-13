import { Router } from "express";
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const router = Router(); // kreiranje na Router.
const studentPath = path.join(import.meta.dirname, '..', 'data', 'students.json');

// Query params => if http://localhost:3000/students?group=G1

// Get all students
router.get('/students', (req, res) => {
    // * Query params
    const group = req.query.group;
    // 1. Get students from the JSON (dataBase)
    const strStudents = fs.readFileSync(studentPath);
    // 2. Parse the students.
    const students = JSON.parse(strStudents);
    const filteredStudents = students.filter(student => student.group == group);

    if (!group) {
        res.send(students);
    }

    // 3. Send the students to req.
    res.send(filteredStudents);
})


// Create a student 
router.post('/students', (req, res) => {
    // 1. Get the body
    const student = req.body;
    // 2. Create a new student
    const newStudent = {
        ...student,
        id: uuidv4(),
    };
    // 3. Get the students from the DB
    const students = JSON.parse(fs.readFileSync(studentPath));
    // 4. Push the new student to the students DB
    students.push(newStudent);
    // 5. Stringify the students
    const strStudents = JSON.stringify(students);
    fs.writeFileSync(studentPath, strStudents);
    // 6. Return the response
    res.status(201).send(newStudent);
});


// Get one student (BY ID)
router.get('/students/:id', (req, res) => {
    // 1. Get the ID
    const id = req.params.id;
    // 2. Get the students from the DB
    const students = JSON.parse(fs.readFileSync(studentPath));
    // 3. Filter the students
    const student = students.find(student => student.id === id);
    // 4. Return the response 
    res.send(student);
});


// Update a student
router.put('/students/:id', (req, res) => {

    // 1. Get the ID
    const id = req.params.id;
    // 2. Get the body out of the request
    const body = req.body;
    // 3. Get the students from the DB
    const students = JSON.parse(fs.readFileSync(studentPath));
    // 4. Find the student
    const index = students.findIndex(student => student.id === id);
    // 5. Update the student
    students[index] = {
        ...body,
        id,
    };
    // 6. Save in DB
    fs.writeFileSync(studentPath, JSON.stringify(students));
    // 7. Return response to Client
    res.send(students[index]);
});


// Update a student group
router.patch('/students/:id/group', (req, res) => {

    // 1. Get the ID from the req
    const id = req.params.id;
    // 2. Get the body from the req
    const body = req.body;
    // 3. Get the students from the DB
    const students = JSON.parse(fs.readFileSync(studentPath));
    // 4. Find the student from it's ID
    const index = students.findIndex(student => student.id === id);
    // 5. Update the student group
    students[index].group = body.group;
    // 6. Save students in DB
    fs.writeFileSync(studentPath, JSON.stringify(students));
    // 7. Return the res to Client
    res.send(students[index]);
})


// Delete a student
router.delete('/students/:id', (req, res) => {

    // 1. Get the ID
    const id = req.params.id;
    // 2. Get the student from the DB
    const students = JSON.parse(fs.readFileSync(studentPath));
    // 3. Remove the student from the array
    const filteredStudent = students.filter(student => student.id !== id);
    // 4. Save the filtered students in DB
    fs.writeFileSync(studentPath, JSON.stringify(filteredStudent));
    // 5. Return the response to the client
    res.sendStatus(204);
})

export default router;