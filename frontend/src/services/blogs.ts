import axios from "axios";

const baseUrl = "/api/blogs";

export const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

export const getBlogPost = async (slug: string) => {
    const response = await axios.get(`${baseUrl}/${slug}`);
    return response.data;
};
