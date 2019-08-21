import React from 'react';
import {IGeneratedTracks} from '../react-app-env'

const GeneratedTracks: React.FC<IGeneratedTracks> =({genTracks}) => {
    // console.log("tracks from gen tracks component",tracks)
    // console.log("tracks is an array:", Array.isArray(tracks));

    

// display all tracks from generated playlist.
var trackData = genTracks.map((track, id) => {
    return (
    <div>
        <p>{track.artists[0].name} : {track.name} </p>
    </div>
    )     
}) 

    return(
        <div>
            <h3>Artist   :   Song</h3>
            <h4>{trackData}</h4>
        </div>
    );
}

export default GeneratedTracks;