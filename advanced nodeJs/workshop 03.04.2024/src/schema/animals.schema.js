import joi from 'joi';

export const types = ["Dog", "Cat"];

export const animalSchema = joi.object(
    {
        name: joi.string().required(),
        type: joi.string().valid(...types).required(),
        breed: joi.string().min(3).required(),
        age: joi.number().integer().min(1).required(),
        status: joi.string().required(),
        description: joi.string().min(3)
    }
)