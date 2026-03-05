import * as config from "./config.js";
import * as logger from "./logger.js";

export const sendDiscordNotification = (
    email: string,
    message: string,
    firstName: string | null,
    lastName: string | null
) => {
    const fullName =
        [firstName, lastName].filter((name) => name !== null).join(" ") ||
        "Anonymous";

    const content = `New message from ${fullName} (${email}):\n${message}`;

    fetch(config.DISCORD_WEBHOOK_URL, {
        body: JSON.stringify({
            content: content,
            username: "Fab Two Bot"
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST"
    }).catch((e) => logger.error(e));
};
