import dotenv from 'dotenv';
dotenv.config();
import passport from 'passport';
import passportSpotify2 from 'passport-github2';
const SpotifyStrategy = passportSpotify2.Strategy;
import User from '../models/user';

passport.use(new SpotifyStrategy({
    clientID: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/spotify/callback"
},
function(accessToken, refreshToken, profile, cb) {
    User.findOne({
        spotifyId: profile.id
    }, (err, user) => {
        if (!user) {
            console.log("GNu UUUUUSER ID: ", user)
            User.create({
                spotifyId: profile.id
            }, (err, user) => {
                if (err) console.log("Here is an ERRRRRRORRR: ", err)
                return cb(null, {...user.toObject(), accessToken});
            })
        } else {
            console.log("In db UUUUUSER ID: ", user)
            return cb(null, {...user.toObject(), accessToken});
        }
    })
}))

passport.serializeUser(function(user, cb) {
    cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

export default passport;