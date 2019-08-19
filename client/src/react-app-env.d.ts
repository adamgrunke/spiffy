/// <reference types="react-scripts" />

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
}

export interface ITuning {
    inst: number;
    dance: number;
    energy: number;
    handleChangeInst: ChangeEvent<HTMLSelectElement>;
    handleChangeDance: ChangeEvent<HTMLSelectElement>;
    handleChangeEnergy: ChangeEvent<HTMLSelectElement>;
}