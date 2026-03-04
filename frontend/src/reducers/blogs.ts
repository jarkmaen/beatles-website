import * as blogsService from "../services/blogs";
import type { AppDispatch } from "../store";
import type { Blog, BlogState } from "../types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: BlogState = {
    blogs: [],
    loading: true
};

const slice = createSlice({
    initialState,
    name: "blogs",
    reducers: {
        setBlogs(state, action: PayloadAction<Blog[]>) {
            state.blogs = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        }
    }
});

const { setBlogs, setLoading } = slice.actions;

export const getBlogs = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(setLoading(true));

        try {
            const data = await blogsService.getAll();
            dispatch(setBlogs(data));
        } catch (error) {
            console.error(error);
        } finally {
            dispatch(setLoading(false));
        }
    };
};

export default slice.reducer;
