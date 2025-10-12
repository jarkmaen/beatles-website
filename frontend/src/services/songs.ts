import axios from "axios";

const baseUrl = "/api/songs";

export const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

export const getSongOfTheDay = async () => {
    const response = await axios.get(`${baseUrl}/song-of-the-day`);
    return response.data;
};
