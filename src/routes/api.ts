import express from 'express';
const router = express.Router();
import User, {IUser} from '../models/user';
import Tuning, {ITuning} from '../models/tuning'
import axios from 'axios';
// import passport from '../config/ppConfig'

// GET ALL USER PLAYLISTS
router.get('/:user_id/playlists', (req, res) => {
    let config = {
        headers: {
            'Authorization': `Bearer ${req.user.accessToken}`
        }
    }
    // GET ALL USER PLAYLISTS
    axios.get(`https://api.spotify.com/v1/me/playlists`, config)
    .then((response) => {
        // console.log(response.data)
        res.json(response.data.items);
    }).catch((err) => {
        console.log(err);
    }) 
})

// GET ALL TRACKS FROM SINGLE PLAYLIST
router.get('/:user_id/playlists/:playlist_id', (req, res) => {

    let config = {
        headers: {
            'Authorization': `Bearer ${req.user.accessToken}`
        }
    }
    axios.get(`https://api.spotify.com/v1/playlists/${req.params.playlist_id}/tracks`, config)
    .then((response) => {
        // console.log('Name: ',response.data.items[0].track.artists[0].name, 
        //             ' ID: ', response.data.items[0].track.artists[0].id)
        // console.log('Name: ',response.data.items[0].track.name, 
        //             ' ID: ', response.data.items[0].track.id)
        res.json(response.data.items);
    }).catch((err) => {
        console.log(err);
    }) 
})

router.get('/:user_id/playlists/:inst/:dance/:energy/:artist/:track', (req, res) => {
    let config = {
        headers: {
            'Authorization': `Bearer ${req.user.accessToken}`
        }
    }
    axios.get(`https://api.spotify.com/v1/recommendations?limit=5&market=US&seed_artists=${req.params.artist}&seed_tracks=${req.params.track}&target_danceability=${req.params.dance}&target_energy=${req.params.energy}&target_instrumentalness=${req.params.inst}`, config)
        .then((response) => {
            console.log(response.data);
            res.json(response.data);
        }).catch((err) => {
            console.log(err);
        })
})

// ======================== DB ==================================== //
// GET ALL playlists for a user
router.get('/', (req, res) => {
    console.log("THE MOTHERFUCKER", req.user)

    console.log("the whole &*&*^%^&*&^%%&*(*&^%^&*^%$%^&^%  request.user:", req.user)
    User.findById(req.user).populate('tuning').exec( (err, tuning: ITuning) => {
        if (err) res.json(err)
        // console.log(tuning)
        res.send(tuning)
    })
    // res.send("nuthin to see here, folks")
});

// POST tuning parameters for a user
router.post('/', (req, res) => {
    console.log("Hitting the POST new tuning route");
    // console.log(req.user._id)
    // create the tuning
    Tuning.create({
        seedArtists: req.body.seedArtist,
        seedTracks: req.body.seedTracks,
        inst: req.body.inst,
        dance: req.body.dance,
        energy: req.body.energy
    }), (err, tuning: ITuning) => {
        tuning.save(function(err, tuning){
            if (err) console.log(err)
            res.json(tuning)
        })
    }
    // res.send("noooooooo!")
    
    // user extends mongoose.Document
})

// router.post('')

export default router;