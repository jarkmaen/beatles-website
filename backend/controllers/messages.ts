import * as logger from "../utils/logger.js";
import type { Request, Response } from "express";
import { ContactMessage } from "../models/index.js";
import { sendDiscordNotification } from "../utils/discord.js";

export const createMessage = async (req: Request, res: Response) => {
    try {
        const { email, firstName, lastName, message } = req.body ?? {};

        if (!email || !message) {
            res.status(400).json({ error: "Email and message are required" });
            return;
        }

        if (
            typeof email !== "string" ||
            (firstName && typeof firstName !== "string") ||
            (lastName && typeof lastName !== "string") ||
            typeof message !== "string"
        ) {
            res.status(400).json({ error: "Invalid request body" });
            return;
        }

        if (email.length > 255) {
            res.status(400).json({ error: "Email is too long" });
            return;
        }

        if (firstName && firstName.length > 100) {
            res.status(400).json({ error: "Invalid first name" });
            return;
        }

        if (lastName && lastName.length > 100) {
            res.status(400).json({ error: "Invalid last name" });
            return;
        }

        if (message.length > 3500) {
            res.status(400).json({ error: "Message is too long" });
            return;
        }

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
