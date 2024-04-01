import { Schema, model } from 'mongoose';

const postSchema = new Schema({
    title: {
        type: String,
        minLength: 3,
        maxLength: 50,
        required: true,
    },
    content: {
        type: String,
        minLength: 3,
        maxLength: 50,
    }
},
    {
        timestamps: true,
    }
);

const Post = model('post', postSchema);

export default Post;