import songsReducer from "./reducers/songs.ts";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        songs: songsReducer
    }
});

export default store;
