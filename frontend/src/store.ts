import songsReducer from "./reducers/songs.ts";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        songs: songsReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
