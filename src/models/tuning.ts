import mongoose, {Schema} from 'mongoose'

const tuningSchema = new Schema({
    seedArtists: String,
    seedTracks: String,
    dance: Number,
    energy: Number,
    inst: Number
    // limit: Number,
    // valence: Number
})

export interface ITuning extends mongoose.Document {
    seedArtists: string;
    seedTracks: string,
    inst: number;
    dance: number;
    energy: number;
    _id: number;
}

export default mongoose.model('Tuning', tuningSchema);