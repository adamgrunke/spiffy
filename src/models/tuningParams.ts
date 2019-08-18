import mongoose, {Schema} from 'mongoose'

const tuningSchema = new Schema({
    seed_artists: {
        type: String,
        required: [true, 'You need to have a seed for artist']
    }, 
    seed_genre: {
        type: String,
        required: [true, 'You need to have a seed for artist']
    },
    seed_tracks: {
        type: String,
        required: [true, 'You need to have a seed for artist']
    }, 
    limit: Number,
    danceability: Number,
    energy: Number,
    instrumentalness: Number,
    valence: Number
})

export default mongoose.model('Tuning', tuningSchema);