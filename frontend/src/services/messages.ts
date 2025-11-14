import axios from "axios";
import type { Message } from "../types";

const baseUrl = "/api/messages";

export const send = async (messageData: Message) => {
    const response = await axios.post(baseUrl, messageData);
    return response.data;
};
