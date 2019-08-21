/// <reference types="react-scripts" />

import { string } from "prop-types";

export interface IUser {
    _id?: string;
    spotifyId: number;
}

export interface IPlaylist {
    name: string;
    id: number;
}
export interface ITracks {
    name: string;
    track: any;
    artists: string;
    id: string;
}

// export interface IArtist {
//     external_urls: {spotify: "https://open.spotify.com/artist/6kBjAFKyd0he7LiA5GQ3Gz"}
//     href: string,
//     id: "6kBjAFKyd0he7LiA5GQ3Gz"
//     name: "Aqua"
//     type: "artist"
//     uri: "spotify:artist:6kBjAFKyd0he7LiA5GQ3Gz"
// }

export interface ITuning {
    inst: number;
    dance: number;
    energy: number;
    handleChangeInst: ChangeEvent<HTMLSelectElement>;
    handleChangeDance: ChangeEvent<HTMLSelectElement>;
    handleChangeEnergy: ChangeEvent<HTMLSelectElement>;
}

export interface IGeneratedTracks {
    genTracks: any[];
}

export interface ISavedTunings {
    _id: number;
    seedArtists: number;
    seedTracks: number;
    inst: number;
    dance: number;
    energy: number;
}