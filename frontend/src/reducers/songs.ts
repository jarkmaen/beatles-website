import * as songsService from "../services/songs";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Song, SongsState } from "../types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: SongsState = {
    songOfTheDay: null,
    songs: []
};

const slice = createSlice({
    initialState,
    name: "songs",
    reducers: {
        setSongOfTheDay(state, action: PayloadAction<Song>) {
            state.songOfTheDay = action.payload;
        },
        setSongs(state, action: PayloadAction<Song[]>) {
            state.songs = action.payload;
        }
    }
});

const { setSongOfTheDay, setSongs } = slice.actions;

export const getSongOfTheDay = () => {
    return async (dispatch: any) => {
        const data = await songsService.getSongOfTheDay();
        dispatch(setSongOfTheDay(data));
    };
};

export const getSongs = () => {
    return async (dispatch: any) => {
        const data = await songsService.getAll();
        dispatch(setSongs(data));
    };
};

export default slice.reducer;
