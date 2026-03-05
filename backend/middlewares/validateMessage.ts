import type { NextFunction, Request, Response } from "express";

export const validateMessage = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { email, firstName, lastName, message } = req.body;

    if (
        typeof email !== "string" ||
        (firstName !== null && typeof firstName !== "string") ||
        (lastName !== null && typeof lastName !== "string") ||
        typeof message !== "string"
    ) {
        return res.status(400).json({ error: "Invalid request body" });
    }

    const trimmedEmail: string = email.trim();
    const trimmedFirstName: string | null = firstName?.trim() || null;
    const trimmedLastName: string | null = lastName?.trim() || null;
    const trimmedMessage: string = message.trim();

    if (!trimmedEmail || !trimmedMessage) {
        return res
            .status(400)
            .json({ error: "Email and message are required" });
    }

    req.body.email = trimmedEmail;
    req.body.firstName = trimmedFirstName;
    req.body.lastName = trimmedLastName;
    req.body.message = trimmedMessage;

    if (trimmedEmail.length > 255) {
        return res.status(400).json({ error: "Email address is too long" });
    }

    if (trimmedFirstName && trimmedFirstName.length > 100) {
        return res.status(400).json({ error: "First name is too long" });
    }

    if (trimmedLastName && trimmedLastName.length > 100) {
        return res.status(400).json({ error: "Last name is too long" });
    }

    if (trimmedMessage.length > 3500) {
        return res.status(400).json({ error: "Message is too long" });
    }

    return next();
};
