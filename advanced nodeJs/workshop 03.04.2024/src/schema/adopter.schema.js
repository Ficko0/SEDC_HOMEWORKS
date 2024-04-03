import joi from 'joi';

export const adopterSchema = joi.object(
    {
        adopterName: joi.string().min(3).required(),
        adopterEmail: joi.string().required(),
        animal: joi.string().required(),
    }
)