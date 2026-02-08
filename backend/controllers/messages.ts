import { ContactMessage } from "../models/index.js";
import { Request, Response } from "express";

export const createMessage = async (req: Request, res: Response) => {
    try {
        const { email, first_name, last_name, message } = req.body ?? {};

        if (!email || !message) {
            res.status(400).json({ error: "Email and message are required" });
            return;
        }

        if (
            typeof email !== "string" ||
            (first_name && typeof first_name !== "string") ||
            (last_name && typeof last_name !== "string") ||
            typeof message !== "string"
        ) {
            res.status(400).json({ error: "Invalid request body" });
            return;
        }

        if (email.length > 255) {
            res.status(400).json({ error: "Email is too long" });
            return;
        }

        if (first_name && first_name.length > 100) {
            res.status(400).json({ error: "Invalid first name" });
            return;
        }

        if (last_name && last_name.length > 100) {
            res.status(400).json({ error: "Invalid last name" });
            return;
        }

        if (message.length > 3500) {
            res.status(400).json({ error: "Message is too long" });
            return;
        }

        const newMessage = await ContactMessage.create({
            email,
            first_name: first_name ?? null,
            last_name: last_name ?? null,
            message
        });

        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
