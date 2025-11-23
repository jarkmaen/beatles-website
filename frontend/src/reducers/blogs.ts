import * as blogsService from "../services/blogs";
import type { Blog, BlogsState } from "../types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: BlogsState = {
    blogs: []
};

const slice = createSlice({
    initialState,
    name: "blogs",
    reducers: {
        setBlogs(state, action: PayloadAction<Blog[]>) {
            state.blogs = action.payload;
        }
    }
});

const { setBlogs } = slice.actions;

export const getBlogs = () => {
    return async (dispatch: any) => {
        const data = await blogsService.getAll();
        dispatch(setBlogs(data));
    };
};

export default slice.reducer;
