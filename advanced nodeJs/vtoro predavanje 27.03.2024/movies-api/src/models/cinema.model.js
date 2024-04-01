import { Schema, model } from "mongoose";

const cinemaSchema = new Schema ({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
    },
    location: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50, 
    },
    capacity: {
        type: Number,
        required: true,
        min: 1,
    },
    movies: [
        {
            type: Schema.Types.ObjectId,
            ref: 'movie',
        }
    ]
},
    {
    timestamps: true,
    }
)

const Cinema = model('cinema', cinemaSchema);

export default Cinema;