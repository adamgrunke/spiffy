import mongoose, {Schema} from 'mongoose'

const tuningSchema = new Schema({
    artistSeed: {
        type: String,
        required: [true, 'You need to have a seed for artist']
    }, 
    genreSeed: {
        type: String,
        required: [true, 'You need to have a seed for artist']
    },
    songSeed: {
        type: String,
        required: [true, 'You need to have a seed for artist']
    }, 
    
})

export default mongoose.model('Tuning', tuningSchema);