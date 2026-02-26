import * as logger from "./logger.js";
import { DISCORD_WEBHOOK_URL } from "./config.js";

export const sendDiscordNotification = (
    email: string,
    message: string,
    firstName?: string,
    lastName?: string
) => {
    const fullName =
        [firstName, lastName]
            .filter((name) => name !== null && name !== undefined)
            .join(" ") || "Anonymous";

    const content = `New message from ${fullName} (${email}):\n${message}`;

    fetch(DISCORD_WEBHOOK_URL, {
        body: JSON.stringify({
            content: content,
            username: "Fab Two Bot"
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST"
    }).catch((e) => logger.error(e));
};
