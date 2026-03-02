import * as logger from "../utils/logger.js";
import type { Request, Response } from "express";
import { ContactMessage } from "../models/index.js";
import { sendDiscordNotification } from "../utils/discord.js";

export const createMessage = async (req: Request, res: Response) => {
    try {
        const { email, firstName, lastName, message } = req.body;

        const newMessage = await ContactMessage.create({
            email,
            firstName: firstName ?? null,
            lastName: lastName ?? null,
            message
        });

        sendDiscordNotification(email, message, firstName, lastName);

        res.status(201).json(newMessage);
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: "Server error" });
    }
};
