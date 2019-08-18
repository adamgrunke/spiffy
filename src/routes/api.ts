import express from 'express';
const router = express.Router();
import User from '../models/user';
import axios from 'axios';


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
    // console.log("HIT THE plAYlisT get tracks route!")
    console.log({req})
    axios.get(`https://api.spotify.com/v1/playlists/:playlist_id/tracks`, config)
    // axios.get(`https://api.spotify.com/v1/playlists/0SYhvYUdCNbUKklt7SaYAB/tracks`, config)
    .then((response) => {
        console.log("and now this is the next part of the tracks route!")
        // console.log(response.data)
        res.json(response.data.items);
    }).catch((err) => {
        console.log(err);
    }) 
})

// router.post('')

export default router;