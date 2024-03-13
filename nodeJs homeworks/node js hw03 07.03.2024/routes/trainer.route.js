import { Router } from 'express';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { readData, writeData } from '../services/db.service.js';

const trainersPath = path.join(import.meta.dirname, '..', 'data', 'trainer.json');

const router = Router();


router.get('', (req, res) => {
    const trainers = readData(trainersPath);
    res.send(trainers);
})


router.get('/:id', (req, res) => {
    const id = req.params.id;

    const trainers = readData(trainersPath);

    const trainerById = trainers.findIndex(trainer => trainer.id === id);

    res.send(trainerById);
})


router.post('', (req, res) => {
    const trainer = req.body;

    const newTrainer = {
        ...trainer,
        id: uuidv4(),
    }

    const trainers = readData(trainersPath);

    trainers.push(newTrainer);

    writeData(trainersPath, trainers);

    res.status(201).send(newTrainer);
})


router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;

    const trainers = readData(trainersPath);

    const trainerIndex = trainers.findIndex(trainer => trainer.id === id);

    trainers[trainerIndex] = {
        ...body,
        id,
    }

    writeData(trainersPath, trainers);

    res.send(trainers[trainerIndex]);
})


router.patch('/:id/email', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    
    const trainers = readData(trainersPath);
    
    const trainerIndex = trainers.findIndex(trainer => trainer.id === id);
    
    trainers[trainerIndex].email = body.email;
    
    writeData(trainersPath, trainers);

    res.send(trainers[trainerIndex]);
})


router.patch('/:id/isCurrentlyTeaching', (req, res) => {
    const id = req.params.id;
    const body = req.body;

    const trainers = readData(trainersPath);

    const trainerIndex = trainers.findIndex(trainer => trainer.id === id);
    
    trainers[trainerIndex].isCurrentlyTeaching = body.isCurrentlyTeaching;
    
    writeData(trainersPath, trainers);
    
    res.send(trainers[trainerIndex]);
})


router.patch('/:id/coursesFinishedCount', (req, res) => {
    const id = req.params.id;
    const body = req.body;

    const trainers = readData(trainersPath);
    
    const trainerIndex = trainers.findIndex(trainer => trainer.id === id);
    
    trainers[trainerIndex].coursesFinishedCount = body.coursesFinishedCount;

    writeData(trainersPath, trainers);
    
    res.send(trainers[trainerIndex]);
})


router.delete('/:id', (req, res) => {
    const id = req.params.id;

    const trainers = readData(trainersPath);

    const deletedTrainer = trainers.filter(trainer => trainer.id !== id);

    writeData(trainersPath, deletedTrainer);

    res.sendStatus(204);
})

export default router;