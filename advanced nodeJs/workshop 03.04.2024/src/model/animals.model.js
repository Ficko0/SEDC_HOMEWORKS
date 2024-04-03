import { Schema, model } from 'mongoose';
import { types } from '../schema/animals.schema.js';

const animalSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: types,
        required: true,
    },
    breed: {
        type: String,
        minLength: 3,
        required: true,
    },
    age: {
        type: Number,
        min: 1,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        minLength: 3,
    }
},
    {
        timestamps: true,
    })

const Animal = model('animals', animalSchema);

export default Animal;