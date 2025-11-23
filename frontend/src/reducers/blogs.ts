import * as blogsService from "../services/blogs";
import type { Blog, BlogsState } from "../types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: BlogsState = {
    blogPost: null,
    blogs: []
};

const slice = createSlice({
    initialState,
    name: "blogs",
    reducers: {
        setBlogPost(state, action: PayloadAction<Blog>) {
            state.blogPost = action.payload;
        },
        setBlogs(state, action: PayloadAction<Blog[]>) {
            state.blogs = action.payload;
        }
    }
});

const { setBlogPost, setBlogs } = slice.actions;

export const getBlogPost = (slug: string) => {
    return async (dispatch: any) => {
        const data = await blogsService.getBlogPost(slug);
        dispatch(setBlogPost(data));
    };
};

export const getBlogs = () => {
    return async (dispatch: any) => {
        const data = await blogsService.getAll();
        dispatch(setBlogs(data));
    };
};

export default slice.reducer;
