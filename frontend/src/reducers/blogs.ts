import * as blogsService from "../services/blogs";
import type { Blog, BlogsState } from "../types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: BlogsState = {
    blogs: [],
    loading: true
};

const slice = createSlice({
    initialState,
    name: "blogs",
    reducers: {
        setBlogs(state, action: PayloadAction<Blog[]>) {
            state.blogs = action.payload;
            state.loading = false;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        }
    }
});

const { setBlogs, setLoading } = slice.actions;

export const getBlogs = () => {
    return async (dispatch: any) => {
        dispatch(setLoading(true));

        try {
            const data = await blogsService.getAll();
            dispatch(setBlogs(data));
        } catch (error) {
            console.error(error);
            dispatch(setLoading(false));
        }
    };
};

export default slice.reducer;
