import type { AppDispatch } from "../store";
import { getSongOfTheDay, getSongs } from "../reducers/songs";
import { useDispatch } from "react-redux";

export const useInitialization = () => {
    const dispatch = useDispatch<AppDispatch>();

    return () => {
        dispatch(getSongOfTheDay());
        dispatch(getSongs());
    };
};

export default useInitialization;
