import type { AppDispatch } from "../store";
import { getBlogs } from "../reducers/blogs";
import { getSongOfTheDay, getSongs } from "../reducers/songs";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useInitialization = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getBlogs());
        dispatch(getSongOfTheDay());
        dispatch(getSongs());
    }, []);
};

export default useInitialization;
