import blogsReducer from "./reducers/blogs";
import songsReducer from "./reducers/songs";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        songs: songsReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
