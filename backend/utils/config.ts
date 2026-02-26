import "dotenv/config";

if (!process.env.DISCORD_WEBHOOK_URL) {
    throw new Error("DISCORD_WEBHOOK_URL environment variable is not set");
}

if (!process.env.PORT) {
    throw new Error("PORT environment variable is not set");
}

if (!process.env.POSTGRESQL_URL) {
    throw new Error("POSTGRESQL_URL environment variable is not set");
}

export const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
export const PORT = process.env.PORT;
export const POSTGRESQL_URL = process.env.POSTGRESQL_URL;
