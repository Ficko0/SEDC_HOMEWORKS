import joi from 'joi';

const postSchema = joi.object({
    title: joi.string().min(3).max(50).required(),
    content: joi.string().min(3).max(50),
});

export default postSchema;