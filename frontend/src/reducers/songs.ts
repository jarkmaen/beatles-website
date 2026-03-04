import * as songsService from "../services/songs";
import type { AppDispatch } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Song, SongState } from "../types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: SongState = {
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
    return async (dispatch: AppDispatch) => {
        try {
            const data = await songsService.getSongOfTheDay();
            dispatch(setSongOfTheDay(data));
        } catch (error) {
            console.error(error);
        }
    };
};

export const getSongs = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const data = await songsService.getAll();
            dispatch(setSongs(data));
        } catch (error) {
            console.error(error);
        }
    };
};

export default slice.reducer;
