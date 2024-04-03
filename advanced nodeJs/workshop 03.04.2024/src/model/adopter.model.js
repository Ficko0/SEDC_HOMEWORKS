import { Schema, model } from 'mongoose';

const adopterSchema = new Schema({
    adopterName: {
        type: String,
        minLength: 3,
        required: true,
    },
    adopterEmail: {
        type: String,
        required: true,
    },
    animal: [
        {
            type: Schema.Types.ObjectId,
            ref: 'animals',
        }]
},
    {
        timestamps: true
    }
)

const Adopter = model('adoptions', adopterSchema);

export default Adopter;